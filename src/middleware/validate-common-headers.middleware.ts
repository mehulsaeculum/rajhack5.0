// external packages
import { Request, Response, NextFunction } from 'express';

import httpResponse from '../helpers/http-response';  // http responses
import errorManager from '../helpers/error-manager';  // error manager

export const validateCommonHeaders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const headers = req.headers || {}
    if (!headers.x_target && !headers.x_target) {
      httpResponse.sendFailer(req, res, errorManager.getHttpError('X_TARGET_HEADER_MISSING'));
      return
    }

    req.headers.x_target = headers.x_target || headers.x_target
    next();
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null)
  }
}
