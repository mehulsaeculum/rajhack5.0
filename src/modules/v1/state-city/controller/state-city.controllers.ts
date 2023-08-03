import { Request, Response } from 'express';
import httpResponse from '../../../../helpers/http-response';
import * as stateCityService from '../services/state-city.service';

const stateLookup = async (req: Request, res: Response) => {
  try {
    let response = await stateCityService.stateLookup();
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const cityLookup = async (req: Request, res: Response) => {
  try {
    let response = await stateCityService.cityLookup(req.params);
    httpResponse.sendSuccess(res, response?.state_city || []);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

export {
  stateLookup,
  cityLookup,
}
