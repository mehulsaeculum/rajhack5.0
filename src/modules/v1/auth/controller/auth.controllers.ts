// external packages
import { Request, Response } from 'express';

// http responses
import httpResponse from '../../../../helpers/http-response';
// services
import * as userService from '../../user/services/user.service';
import * as authService from '../services/auth.service';

const login = async (req: Request, res: Response) => {
  try {
    const userData = await userService.userEmailGet(req.body.user_email);
    const response = await authService.login(req, userData);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const logout = async (req: Request, res: Response) => {
  try {
    await authService.logout(req)
    httpResponse.sendSuccess(res, null);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

const forgotPassword = async (req: Request, res: Response) => {
  try {
    const user = await userService.userEmailGet(req.body.user_email)
    await authService.forgotPassword(user)
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

const resetPassword = async (req: Request, res: Response) => {
  try {
    await authService.resetPassword(req)
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

const resetLinkValidate = async (req: Request, res: Response) => {
  try {
    await authService.resetLinkValidate(req)
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

const tokenValidate = async (req: Request, res: Response) => {
  try {
    const response = await authService.getSessionData(req.user)
    httpResponse.sendSuccess(res, response)
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

export { login, logout, forgotPassword, resetPassword, resetLinkValidate, tokenValidate }
