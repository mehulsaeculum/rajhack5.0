// external packages
import _ from 'lodash';
import { Request } from 'express';

// error managers
import errorManager from '../../../../helpers/error-manager';

// models
import UserModel from '../../../../models/user.model';
import UserLoginModel from '../../../../models/user.login.model';
import UserRoleModel from '../../../../models/user.role.model';
import UserTargetModel from '../../../../models/target.model';

// helpers
import { sendSMTPEmail } from '../../../../helpers/email';
import { encrypt } from '../../../../helpers/encryption';

// config data
import { SMTP_DETAILS, EMAIL_WELCOME_CONFIG } from '../../../../config/email';

const userEmailGet = async (user_email: string) => {
  const response = await UserModel.findOne({ user_email: { $regex: `^${user_email.replaceAll('+', '\\+')}$`, '$options': 'i' }, user_archived_on: null });
  if (!response) throw errorManager.getHttpError('INVALID_EMAIL');

  // sort user target(s) in ascending order based on 'trgt_index'
  if (response.user_target) response.user_target = (response.user_target || []).filter((target: any) => target.trgt_status === 'active').sort((a: any, b: any) => a.trgt_index - b.trgt_index);
  return response;
}

const userPagging = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  if (!data.sort_by) data.sort_by = 'user_updated_on';
  return await UserModel.paginate(data, { user_archived_on: null });
}

const userExport = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  if (!data.sort_by) data.sort_by = 'user_updated_on';
  return await UserModel.fileExport(data, { user_archived_on: null })
}

const userById = async (user_id: string) => {
  const response = await UserModel.findOne({ user_id, user_archived_on: null }, { user_login_attempt_release_at: 0, user_login_attempt: 0, user_reset_token_expired_at: 0, user_reset_token: 0, user_password: 0 });
  if (!response) throw errorManager.getHttpError('USER_NOT_FOUND');

  // sort user target(s) in ascending order based on 'trgt_index'
  if (response.user_target) response.user_target = (response?.user_target || []).filter((target: any) => target.trgt_status === 'active').sort((a: any, b: any) => a.trgt_index - b.trgt_index);
  return response;
}

const userRolePermissionByRoleId = async (usrl_id: string) => {
  return await UserRoleModel.findOne({ usrl_id });
}

const userProfileGet = async (user_id: string) => {
  const userDetail = await UserModel.findOne({ user_id, user_archived_on: null });
  let userRole = await UserRoleModel.findOne({ usrl_id: userDetail?.user_fk_usrl_id ?? '', usrl_archived_on: null });
  return { user: { ...(userDetail.toJSON()), access: userRole } };
}

const userLookup = async (targetId: string = '') => {
  let condition: any = { user_status: 'active', user_archived_on: null };
  if (targetId) condition = { ...condition, 'user_target.trgt_id': targetId }; // to get target specific users only
  return await UserModel.find(condition, { user_id: 1, user_name: 1, user_email: 1, user_full_name: 1, user_role: 1, user_image: 1, user_mobile_number: 1 });
}

const userMultipleGet = async (id: Array<String>) => {
  return await UserModel.find({ user_id: { '$in': id }, user_archived_on: null }, { user_id: 1, user_name: 1, user_first_name: 1, user_last_name: 1 });
}

const userInsert = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.headers);
  const session: any = req.user;
  const password = data.user_password;
  data.user_password = encrypt(data.user_password);

  const emailExist = await UserModel.findOne({ user_email: { $regex: `^${data.user_email.replaceAll('+', '\\+')}$`, '$options': 'i' }, user_archived_on: null });
  if (emailExist) throw errorManager.getHttpError('EMAIL_ALREADY_EXIST')

  const targets = await getTargets(data?.user_target);
  const role = await UserRoleModel.findOne({ usrl_id: data.user_fk_usrl_id, usrl_archived_on: null }, { _id: 0, usrl_id: 1, usrl_name: 1 });
  if (!role) throw errorManager.getHttpError('DATA_NOT_FOUND')

  const user = await UserModel.create({
    user_email: data.user_email,
    user_password: data.user_password,
    user_name: data.user_name,
    user_first_name: data.user_first_name,
    user_last_name: data.user_last_name,
    user_full_name: `${(data?.user_first_name || '').trim()} ${(data?.user_last_name || '').trim()}`,
    user_fk_usrl_id: data.user_fk_usrl_id,
    user_role: role,
    user_status: data.user_status,
    user_target: targets,
    user_default_target: null,
    user_social_link: data.user_social_link,
    user_custom_field: data?.user_custom_field || {},
    user_created_by: session.session,
    user_updated_by: session.session
  });

  // send welcome email to user
  const modifiedHTML = EMAIL_WELCOME_CONFIG.HTML.replace('##name##', user.user_first_name + ' ' + user.user_last_name)
    .replace('##email##', user.user_email)
    .replace('##password##', password)
    .replace('##login_link##', `${process.env.FRONTEND_URL}/auth/login`)

  await sendSMTPEmail(SMTP_DETAILS, user.user_email, EMAIL_WELCOME_CONFIG.SUBJECT, modifiedHTML)
  return user;
}

const getTargets = async (ids: []) => {
  return await UserTargetModel.find({ trgt_id: { $in: ids }, trgt_archived_on: null }).sort({ trgt_index: 1 });
}

const bulkUserGet = async (data: any) => {
  let condition: any = {
    user_id: (data.not_in ? { $nin: data.ids } : { $in: data.ids }),
    user_archived_on: null
  }
  if (data.target) condition = { ...condition, 'user_target.trgt_id': data.target }

  const users = await UserModel.find(condition, {
    _id: false, user_id: 1, user_name: 1, user_email: 1, user_image: 1, user_full_name: 1, user_role: '$user_role.usrl_name'
  });

  if (!users.length) throw errorManager.getHttpError('USER_NOT_FOUND');
  return users;
}

const userUpdate = async (req: Request, user: any) => {
  const data = Object.assign(req.body, req.params, req.query);
  const sessionUser: any = req.user;

  if (sessionUser.user_id === data.user_id) {
    // restrict user to change his/her role
    if (data.user_fk_usrl_id !== user.user_fk_usrl_id) throw errorManager.getHttpError('USER_ROLE_UPDATE_ACTION_FORBIDDEN');
    // restrict user to change his/her status (active/inactive)
    else if (data.user_status === 'inactive') throw errorManager.getHttpError('USER_STATUS_UPDATE_ACTION_FORBIDDEN');
  }

  // remove sensitive keys
  if (data.user_password) delete data.user_password;
  if (data.user_email) delete data.user_email;
  if (data.user_name) delete data.user_name;

  data.user_full_name = `${(data?.user_first_name || '').trim()} ${(data?.user_last_name || '').trim()}`;

  const role = await UserRoleModel.findOne({ usrl_id: data.user_fk_usrl_id, usrl_archived_on: null }, { _id: 0, usrl_id: 1, usrl_name: 1 });
  if (!role) throw errorManager.getHttpError('DATA_NOT_FOUND');

  // to update default target
  const isTargetExists = data?.user_target.some((a: any) => a === user.user_default_target);
  if (!isTargetExists) data['user_default_target'] = null;

  const targets = await getTargets(data?.user_target);
  if (targets?.length) data.user_target = targets;

  const updateData = _.assign(data, { user_role: role, user_updated_by: sessionUser.session, user_updated_on: new Date() });
  return await UserModel.updateOne({ user_id: data.user_id }, updateData);
}

const userTargetUpdate = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query);
  const user = await UserModel.findOne({ user_id: data.user_id, user_archived_on: null }, { _id: 0, user_target: 1 });

  const isTargetExists = user?.user_target.some((a: any) => a.trgt_id === data.trgt_id);
  if (!isTargetExists) throw errorManager.getHttpError('TARGET_NOT_SELECTED');

  return await UserModel.updateOne({ user_id: data.user_id }, { user_default_target: data.trgt_id });
}

const userProfileUpdate = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  const updateData = {
    user_first_name: data.user_first_name,
    user_last_name: data.user_last_name,
    user_mobile_number: data.user_mobile_number,
    user_image: data.user_image,
    user_status: data.user_status,
    user_updated_by: data.session,
    user_updated_on: new Date()
  }
  return await UserModel.updateOne({ user_id: data.user_id }, updateData);
}

const userPasswordUpdate = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  data.user_current_password = encrypt(data.user_current_password);
  data.user_password = encrypt(data.user_password);

  const user = await UserModel.findOne({ user_id: data.user_id, user_archived_on: null }, { user_password: 1 });

  // invalid currect password
  if (user.user_password !== data.user_current_password) throw errorManager.getHttpError('USER_PASSWORD_NOT_MATCH');
  // currect password and new password could not be the same
  if (data.user_current_password === data.user_password) throw errorManager.getHttpError('PASSWORD_SAME');

  const updateData = {
    user_password: data.user_password,
    user_updated_by: data.session,
    user_updated_on: new Date()
  }
  return await UserModel.updateOne({ user_id: data.user_id }, updateData);
}

const userStatusUpdate = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query);
  const tokenData: any = req.user;
  // restrict user to change his/her status (active/inactive)
  if (tokenData.user_id === data.user_id) throw errorManager.getHttpError('USER_STATUS_UPDATE_ACTION_FORBIDDEN');
  // remove active session(s) of a user if the user becomes inactive
  if (data.usrl_status !== 'active') await UserLoginModel.updateMany({ usrlg_fk_user_id: data.user_id }, { usrlg_logout: true });

  const updateData = _.assign(data, { user_updated_by: tokenData.session, user_updated_on: new Date() });
  return await UserModel.updateOne({ user_id: data.user_id }, updateData);
}

const userDelete = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query);
  const tokenData: any = req.user;
  // restrict user to archive his/her account
  if (tokenData.user_id === data.user_id) throw errorManager.getHttpError('USER_DELETE_ACTION_FORBIDDEN');

  await UserModel.updateOne({ user_id: data.user_id }, { user_archived_by: tokenData.session, user_archived_on: new Date() });
  return await UserLoginModel.updateMany({ usrlg_fk_user_id: data.user_id }, { usrlg_logout: true })
}

export {
  userEmailGet, userPagging, userExport, userById, userProfileGet, userMultipleGet, userLookup, userInsert, userUpdate,
  userProfileUpdate, userStatusUpdate, userDelete, userTargetUpdate, bulkUserGet, userRolePermissionByRoleId, userPasswordUpdate
}
