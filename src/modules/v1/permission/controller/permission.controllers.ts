// external packages
import { Request, Response } from 'express';

// http responses
import httpResponse from '../../../../helpers/http-response';

// services
import * as permissionService from '../services/permission.service';

const permissionPagging = async (req: Request, res: Response) => {
  try {
    const response = await permissionService.permissionPagging(req);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const permissionAll = async (req: Request, res: Response) => {
  try {
    const response = await permissionService.permissionAll();
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const permissionGet = async (req: Request, res: Response) => {
  try {
    const response = await permissionService.permissionGet(req.params.per_id);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const permissionLookup = async (req: Request, res: Response) => {
  try {
    const response = await permissionService.permissionLookup();
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const permissionAdd = async (req: Request, res: Response) => {
  try {
    const response = await permissionService.permissionAdd(req);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const permissionUpdate = async (req: Request, res: Response) => {
  try {
    const perData = await permissionService.permissionGet(req.params.per_id);
    await permissionService.permissionUpdate(req, perData);
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const permissionStatusUpdate = async (req: Request, res: Response) => {
  try {
    await permissionService.permissionGet(req.params.per_id);
    await permissionService.permissionStatusUpdate(req);
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const permissionDelete = async (req: Request, res: Response) => {
  try {
    await permissionService.permissionGet(req.params.per_id);
    await permissionService.permissionDelete(req);
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

export { permissionPagging, permissionGet, permissionLookup, permissionAdd, permissionUpdate, permissionStatusUpdate, permissionDelete, permissionAll }
