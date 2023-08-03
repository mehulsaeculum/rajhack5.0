// external packages
import { Request, Response } from 'express';

// error manager
import ErrorManager from './error-manager';

// http code
import { HTTPCODE } from '../config/http-code.config';

const _options = { showCustomErrMessages: true };

const set = (options: any) => {
  _options.showCustomErrMessages = options.showCustomErrMessages;
};

const makeError = (code: string, message: string, msg_code: string) => {
  const httpCode = HTTPCODE['ERROR_' + code];
  let error;

  try {
    code = httpCode.CODE;
    error = {
      httpCode: code,
      message: message || httpCode.MESSAGE,
      msg_code: msg_code
    }
    if (!_options.showCustomErrMessages) {
      error.message = httpCode.MESSAGE;
    }
  } catch (error) {
    const err = new RangeError(`The provided [code] http code:${JSON.stringify(code)} is not valid. Please check the http config file.`);
    throw err;
  }
  return error;
};

const sendFailer = (req: Request, res: Response, error: any, errors: any = []) => {
  if (!error || !error?.httpCode) {
    ErrorManager.serviceErrorHandler(req, res)
  }

  if (!error) {
    error = makeError('500', '', '');
  }

  res.status(error.httpCode || 500);

  const response: any = {
    'status': error.httpCode || 500,
    'message': error.message,
  };

  if (error.code) {
    response['code'] = error.code;
  }
  if (errors) {
    response['errors'] = errors;
  }

  res.json(response);
};

const sendSuccess = (res: any, result?: any) => {
  let data;
  if (!result) {
    data = {
      'status': HTTPCODE.SUCCESS_200.CODE,
      'message': HTTPCODE.SUCCESS_200.MESSAGE
    };
  } else {
    data = {
      'status': HTTPCODE.SUCCESS_200.CODE,
      'message': HTTPCODE.SUCCESS_200.MESSAGE,
      'data': result.data || result
    };
  }
  res.status(HTTPCODE.SUCCESS_200.CODE);
  res.json(data);
};

export default { sendSuccess, sendFailer, makeError, set };