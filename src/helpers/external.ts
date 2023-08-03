// external packages
import axios from 'axios'
import httpResponse from './http-response';

interface ExternalCall {
  method: string;
  url: string;
  body?: Object;
  headers?: any;
  callback?: any;
}

const makeExternalRequest = async ({ method, url, body = {}, headers = {}, callback = () => { } }: ExternalCall) => {
  try {
    const { status, data } = await axios({
      method,
      url,
      data: JSON.stringify(body),
      headers: { ...headers, 'Content-Type': 'application/json' }
    });

    if (status >= 200 && status < 300) {
      callback(data)
      return data
    } else {
      if (status && status === 401) throw httpResponse.makeError('401', '', '')
      throw data
    }
  } catch (err: any) {
    if (err?.response?.status === 401) throw httpResponse.makeError('401', '', '')
    if (err?.response?.data) throw err.response.data
    throw httpResponse.makeError('500', '', '')
  }
};

export { makeExternalRequest };