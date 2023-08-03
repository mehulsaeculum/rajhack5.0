// external packages
import _ from 'lodash';
import { Request } from 'express';

import errorManager from '../../../../helpers/error-manager';

// models
import UserModel from '../../../../models/user.model';
import UserLoginModel from '../../../../models/user.login.model';
import UserRoleModel from '../../../../models/user.role.model';

// helpers
import { sendSMTPEmail } from '../../../../helpers/email'
import { createJWTToken, encrypt } from '../../../../helpers/encryption';

// common functions
import { generateToken } from '../../../../functions/common';

// config data
import { SMTP_DETAILS, EMAIL_FORGOT_PASSWORD_CONFIG, EMAIL_RESET_PASSWORD_CONFIG } from '../../../../config/email';

const login = async (req: Request, userData: any) => {
  let data = Object.assign(req.body, req.params, req.query, req.user)

  if (userData.user_status === 'inactive') throw errorManager.getHttpError('YOUR_ACCOUND_INACTIVE');

  // to restrict the user for 10 minutes to login after Five (5) failed attempts
  if (userData.user_login_attempt >= 5 && new Date(userData.user_login_attempt_release_at) > new Date()) {
    throw errorManager.getHttpError('LOGIN_ATTEMPTS_REACHED');
  }

  data.user_password = encrypt(data.user_password);

  if (userData.user_password !== data.user_password) {
    if (userData.user_login_attempt === 4) {
      // lock the user account for next 10 minutes
      await UserModel.updateOne({ user_email: userData.user_email }, { user_login_attempt: 5, user_login_attempt_release_at: new Date().setMinutes(new Date().getMinutes() + 10) });
      throw errorManager.getHttpError('LOGIN_ATTEMPTS_REACHED');
    } else if (userData.user_login_attempt < 4) {
      // increment(+1) failed login attempt
      await UserModel.updateOne({ user_email: userData.user_email }, { $inc: { user_login_attempt: 1 }, user_login_attempt_release_at: null });
    }
    throw errorManager.getHttpError('INVALID_PASSWORD');
  }

  const access_code = generateToken();
  const session = mapSessionData(userData);

  await UserLoginModel.create(Object.assign(data, {
    usrlg_fk_user_id: userData.user_id,
    usrlg_access_code: access_code,
    usrlg_expired_at: new Date().setHours(new Date().getHours() + (24 * (data.is_keep_signin ? 7 : 1))),
    usrlg_created_by: session,
    usrlg_updated_by: session,
  }))

  await UserModel.updateOne({ user_email: data.user_email }, { user_login_attempt: 0, user_login_attempt_release_at: null });
  const userRole = await UserRoleModel.findOne({ usrl_id: userData.user_fk_usrl_id, usrl_archived_on: null });

  const token = createJWTToken({
    code: access_code,
    user_id: userData.user_id,
    user_email: userData.user_email,
  });

  return {
    token,
    user: {
      ...(userData.toJSON()),
      access: userRole,
    },
  };
}

const logout = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user)
  let updatedData = {
    usrlg_logout: true,
    usrlg_logout_at: new Date(),
    usrlg_expired_at: null,
    usrlg_updated_on: new Date(),
    usrlg_updated_by: data.session
  }
  await UserLoginModel.updateOne({ usrlg_access_code: data.code, usrlg_fk_user_id: data.user_id }, updatedData);
}

const forgotPassword = async (userData: any) => {
  try {
    const access_code = generateToken();

    const modifiedHTML = EMAIL_FORGOT_PASSWORD_CONFIG.HTML
      .replace('##name##', `${userData.user_first_name} ${userData.user_last_name}`)
      .replace('##reset_link##', `${process.env.FRONTEND_URL}/auth/reset-password?token=${access_code}`)

    await sendSMTPEmail(SMTP_DETAILS, userData.user_email, EMAIL_FORGOT_PASSWORD_CONFIG.SUBJECT, modifiedHTML)

    const updatedData = {
      user_reset_token: access_code,
      user_reset_token_expired_at: new Date().setDate(new Date().getDate() + 1),
      usrlg_updated_on: new Date(),
      usrlg_updated_by: mapSessionData(userData),
    }

    return await UserModel.updateOne({ user_id: userData.user_id }, updatedData);
  } catch (error) {
    throw errorManager.getHttpError('SERVER_ERROR')
  }
}

const resetLinkValidate = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);

  const userData = await UserModel.findOne({ user_reset_token: data.token, user_archived_on: null })
  if (!userData) throw errorManager.getHttpError('RESET_LINK_NOT_FOUND');

  if (new Date(userData.user_reset_token_expired_at) <= new Date()) throw errorManager.getHttpError('RESET_LINK_EXPIRED');
  return;
}

const resetPassword = async (req: Request) => {
  let data = Object.assign(req.body, req.params, req.query, req.user);

  const userData = await UserModel.findOne({ user_reset_token: data.user_reset_token, user_archived_on: null })
  if (!userData) throw errorManager.getHttpError('RESET_LINK_NOT_FOUND');

  if (new Date(userData.user_reset_token_expired_at) <= new Date()) throw errorManager.getHttpError('RESET_LINK_EXPIRED');

  data.user_password = encrypt(data.user_password)
  if (userData.user_password === data.user_password) throw errorManager.getHttpError('PASSWORD_SAME');

  const modifiedHTML = EMAIL_RESET_PASSWORD_CONFIG.HTML.replace('##name##', userData.user_first_name + ' ' + userData.user_last_name)
  await sendSMTPEmail(SMTP_DETAILS, userData.user_email, EMAIL_RESET_PASSWORD_CONFIG.SUBJECT, modifiedHTML)

  const updatedData = {
    user_password: data.user_password,
    user_reset_token_expired_at: new Date().setDate(new Date().getDate() - 2),
    usrlg_updated_on: new Date(),
    usrlg_updated_by: mapSessionData(userData)
  }

  return await UserModel.updateOne({ user_reset_token: data.user_reset_token }, updatedData);
}

const getSessionData = async (userJWT: any) => {
  const userData = await UserModel.findOne({ user_email: { $regex: `^${(userJWT.user_email || userJWT.userEmail).replaceAll('+', '\\+')}$`, '$options': 'i' } });
  if (!userData) throw errorManager.getHttpError('INVALID_EMAIL');
  return _.assign(userJWT, { session: mapSessionData(userData) })
}

const mapSessionData = (userData: any) => {
  return {
    user_id: userData.user_id,
    user_email: userData.user_email || '',
    user_full_name: userData.user_full_name || '',
    user_role: userData.user_role?.usrl_name || '',
    user_image: userData.user_image || '',
    user_mobile_number: userData.user_mobile_number || ''
  }
}

export { login, logout, forgotPassword, resetLinkValidate, resetPassword, getSessionData, mapSessionData }
