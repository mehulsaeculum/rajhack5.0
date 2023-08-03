// external packages
import { Request, Response } from 'express';

// http responses
import httpResponse from '../../../../helpers/http-response';

// services
import * as userRoleService from '../services/user-role.service';

const userRolePagging = async (req: Request, res: Response) => {
  try {
    const response = await userRoleService.userRolePagging(req)
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

const userRoleExport = async (req: Request, res: Response) => {
  try {
    const response = await userRoleService.userRoleExport(req)
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

const userRoleGet = async (req: Request, res: Response) => {
  try {
    const response = await userRoleService.userRoleGet(req.params.usrl_id);
    httpResponse.sendSuccess(res, response.toJSON());
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

const userRoleLookup = async (req: Request, res: Response) => {
  try {
    const response = await userRoleService.userRoleLookup(req.query)
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

const userRoleAdd = async (req: Request, res: Response) => {
  try {
    const response = await userRoleService.userRoleAdd(req);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

const userRoleUpdate = async (req: Request, res: Response) => {
  try {
    await userRoleService.userRoleGet(req.params.usrl_id)
    await userRoleService.userRoleUpdate(req)
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

const userRoleStatusUpdate = async (req: Request, res: Response) => {
  try {
    const userRoleData = await userRoleService.userRoleGet(req.params.usrl_id)
    await userRoleService.userRoleStatusUpdate(req, userRoleData)
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

const userRoleDelete = async (req: Request, res: Response) => {
  try {
    const userRoleData = await userRoleService.userRoleGet(req.params.usrl_id)
    await userRoleService.userRoleDelete(req, userRoleData)
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}

export {
  userRolePagging, userRoleExport, userRoleGet, userRoleLookup, userRoleAdd, userRoleUpdate, userRoleStatusUpdate,
  userRoleDelete
}
