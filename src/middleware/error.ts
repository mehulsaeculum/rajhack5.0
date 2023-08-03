// external packages
import httpStatus from 'http-status';
import { Request, Response } from 'express';

// config data
import { GENERAL } from '../config/general';

const errorHandler = (err: any, _req: Request, res: Response) => {
  let { statusCode, message } = err;

  if (GENERAL.env === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;
  const response = {
    code: statusCode,
    message,
    ...(GENERAL.env === 'development' && { stack: err.stack }),
  }

  if (GENERAL.env === 'development') console.log(err);
  res.status(statusCode).send(response);
};

export { errorHandler };
