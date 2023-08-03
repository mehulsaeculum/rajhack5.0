// external packages
import _ from 'lodash';
import { Request } from 'express';

// helpers
import errorManager from '../../../../helpers/error-manager';

// models
import TargetModel from '../../../../models/target.model';
import UserModel from '../../../../models/user.model';

// common functions
import { escapeRegExp } from '../../../../functions/common';

const targetPagging = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query);
  if (!data.sort_by) data.sort_by = 'trgt_updated_on';
  return await TargetModel.paginate(data, { trgt_archived_on: null });
}

const targetExport = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  if (!data.sort_by) data.sort_by = 'trgt_updated_on';
  return await TargetModel.fileExport(data, { trgt_archived_on: null });
}

const targetLookup = async () => {
  return await TargetModel.find({ trgt_status: 'active', trgt_archived_on: null }, { trgt_id: 1, trgt_name: 1 });
}

const targetGet = async (trgt_id: string) => {
  const response = await TargetModel.findOne({ trgt_id, trgt_archived_on: null });
  if (!response) throw errorManager.getHttpError('DATA_NOT_FOUND');
  return response;
}

const targetAdd = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  data.trgt_slug = (((data.trgt_slug).trim()).toLowerCase()).replace(/ /g, '-');

  const exist = await TargetModel.findOne({ trgt_name: { $regex: `^${escapeRegExp(data.trgt_name)}$`, '$options': 'i' }, trgt_archived_on: null });
  if (exist) throw errorManager.getHttpError('ALREADY_EXISTS');

  const slugExist = await TargetModel.findOne({ trgt_slug: { $regex: `^${escapeRegExp(data.trgt_slug)}$`, '$options': 'i' }, trgt_archived_on: null });
  if (slugExist) throw errorManager.getHttpError('SLUG_ALREADY_EXISTS')

  // find maximum index from targets
  const maxIndex = await TargetModel.findOne({ trgt_archived_on: null }, { trgt_index: 1, _id: 0 }).sort({ trgt_index: -1 });
  const targetIndex = maxIndex.trgt_index ? (maxIndex.trgt_index + 1) : 1;

  const addData = _.assign(data, { trgt_created_by: data.session, trgt_updated_by: data.session, trgt_index: targetIndex });
  return await TargetModel.create(addData);
}

const targetUpdate = async (req: Request, targetData: any) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  data.trgt_slug = (((data.trgt_slug).trim()).toLowerCase()).replace(/ /g, '-');

  // assign values to target schema
  const target = _.pick({ ...data, trgt_index: targetData.trgt_index }, Object.keys(TargetModel.prototype.schema.paths));
  await UserModel.updateMany({ 'user_target.trgt_id': data.trgt_id }, { '$set': { 'user_target.$': target } });
  if (data.trgt_status === 'inactive') await UserModel.updateMany({ user_default_target: data.trgt_id }, { user_default_target: null });

  const exist = await TargetModel.findOne({ trgt_name: { $regex: `^${escapeRegExp(data.trgt_name)}$`, '$options': 'i' }, trgt_id: { '$ne': data.trgt_id }, trgt_archived_on: null });
  if (exist) throw errorManager.getHttpError('ALREADY_EXISTS');

  const slugExist = await TargetModel.findOne({ trgt_slug: { $regex: `^${escapeRegExp(data.trgt_slug)}$`, '$options': 'i' }, trgt_id: { '$ne': data.trgt_id }, trgt_archived_on: null });
  if (slugExist) throw errorManager.getHttpError('SLUG_ALREADY_EXISTS');

  const updateData = _.assign(data, { trgt_updated_on: new Date(), trgt_updated_by: data.session })
  return await TargetModel.updateOne({ trgt_id: data.trgt_id }, updateData);
}

const targetStatusUpdate = async (req: Request, targetData: any) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);

  // assign values to target schema
  const target = _.pick({ ...(targetData).toObject(), trgt_status: data.trgt_status }, Object.keys(TargetModel.prototype.schema.paths));
  await UserModel.updateMany({ 'user_target.trgt_id': data.trgt_id }, { '$set': { 'user_target.$': target } });
  if (data.trgt_status === 'inactive') await UserModel.updateMany({ user_default_target: data.trgt_id }, { user_default_target: null });

  const updateData = _.assign(data, { trgt_updated_on: new Date(), trgt_updated_by: data.session })
  return await TargetModel.updateOne({ trgt_id: data.trgt_id }, updateData);
}

const targetDelete = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  const updateData = _.assign(data, { trgt_archived_on: new Date(), trgt_archived_by: data.session })
  return await TargetModel.updateOne({ trgt_id: data.trgt_id }, updateData);
}

const targetGetBySlug = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  data.trgt_slug = (((data.trgt_slug).trim()).toLowerCase()).replace(/ /g, '-');

  const response = await TargetModel.findOne({ trgt_slug: { $regex: `^${escapeRegExp(data.trgt_slug)}$`, '$options': 'i' }, trgt_status: 'active', trgt_archived_on: null }, { trgt_id: 1, trgt_name: 1 });
  if (!response) throw errorManager.getHttpError('SLUG_NOT_FOUND');
  return response;
}

export { targetPagging, targetExport, targetGet, targetLookup, targetAdd, targetUpdate, targetStatusUpdate, targetDelete, targetGetBySlug }
