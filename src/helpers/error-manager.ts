// external packages
import _ from 'lodash';
import { Request, Response } from 'express';

// http responses
import httpResponse from './http-response';

// error config
import { ERRORS } from '../config/error';

const _getErrorByName = (name: string) => {
  const error = ERRORS[name];
  if (!error) {
    const e = new ReferenceError('The error object cant be get for the provided error name');
    throw e;
  }
  return error;
}

const _getErrorByCode = (code: string) => {
  let error;

  _(ERRORS).forEach((err: any) => {
    if (err.CODE == code) {
      error = err;
    }
  });
  if (!error) {
    const e = new ReferenceError('The error object cant be get for the provided error code');
    throw e;
  }
  return error;
};

const _parseErrorTo = (error: any, lang: string) => {
  lang = lang.toLowerCase();
  const isValidLang = false;
  if (!isValidLang) {
    const e = new ReferenceError('The error object cant be get for the provided error language');
    throw e;
  }
  if (lang == 'http') {
    return httpResponse.makeError(error.httpCode, error.message, error.code);
  }
}

const getError = (key: any, message: string) => {
  let _key: any = parseInt(key);
  let error;
  if (!_.isNaN(_key)) {
    error = _getErrorByCode(_key);
  } else {
    error = _getErrorByName(key);
  }
  error = new Errors(error, message);
  return error;
};

const getHttpError = (key: any, message: any = '') => {
  let _key: any = parseInt(key);
  let error;
  if (!_.isNaN(_key)) {
    error = _getErrorByCode(_key);
  } else {
    error = _getErrorByName(key);
  }
  error = new Errors(error, message);
  return error;
};

class Errors {
  code: any;
  message: any;
  defaultMessage: any;
  httpCode: any;
  constructor(error: any, message: any) {
    this.code = error.rsmsg_msg_code || error.CODE;
    this.message = message || error.DEFAULT_MESSAGE;
    this.defaultMessage = message || error.DEFAULT_MESSAGE;
    this.httpCode = error.rsmsg_http_code || error.HTTP_CODE;
  }
  parseTo(lang: any) {
    return _parseErrorTo(this, lang);
  }
}

const serviceErrorHandler = (req: Request, res: Response) => {
  console.log(req, res, 'serviceErrorHandler');
}

export default { getError, getHttpError, serviceErrorHandler };