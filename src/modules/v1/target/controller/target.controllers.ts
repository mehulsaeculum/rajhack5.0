// external packages
import { Request, Response } from 'express';

// http responses
import httpResponse from '../../../../helpers/http-response';

// services
import * as targetService from '../services/target.service';

const targetPagging = async (req: Request, res: Response) => {
  try {
    const response = await targetService.targetPagging(req);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const targetExport = async (req: Request, res: Response) => {
  try {
    const response = await targetService.targetExport(req);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const targetLookup = async (req: Request, res: Response) => {
  try {
    const response = await targetService.targetLookup();
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const targetGet = async (req: Request, res: Response) => {
  try {
    const response = await targetService.targetGet(req.params.trgt_id);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const targetAdd = async (req: Request, res: Response) => {
  try {
    const response = await targetService.targetAdd(req);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const targetUpdate = async (req: Request, res: Response) => {
  try {
    const targetData = await targetService.targetGet(req.params.trgt_id);
    await targetService.targetUpdate(req, targetData);
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const targetStatusUpdate = async (req: Request, res: Response) => {
  try {
    const targetData = await targetService.targetGet(req.params.trgt_id);
    await targetService.targetStatusUpdate(req, targetData);
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const targetDelete = async (req: Request, res: Response) => {
  try {
    await targetService.targetGet(req.params.trgt_id);
    await targetService.targetDelete(req);
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const targetGetBySlug = async (req: Request, res: Response) => {
  try {
    const response = await targetService.targetGetBySlug(req);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

export {
  targetPagging, targetExport, targetGet, targetLookup, targetAdd, targetUpdate, targetStatusUpdate,
  targetDelete, targetGetBySlug
}
