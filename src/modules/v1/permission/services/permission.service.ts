// external packages
import _ from 'lodash';
import { Request } from 'express';

// error manager
import errorManager from '../../../../helpers/error-manager';

// models
import PermissionModel from '../../../../models/permission.model';

const permissionPagging = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  if (!data.sort_by) data.sort_by = 'per_updated_on';
  return await PermissionModel.paginate(data, { per_archived_on: null });
}

const permissionGet = async (per_id: string) => {
  const response = await PermissionModel.findOne({ per_id, per_archived_on: null });
  if (!response) throw errorManager.getHttpError('DATA_NOT_FOUND');
  return response;
}

const permissionLookup = async () => {
  return await PermissionModel.find({ per_status: 'active', per_parent: null, per_archived_on: null }, { per_name: 1, per_id: 1 });
}

const permissionAll = async () => {
  return await PermissionModel.find({ per_status: 'active', per_archived_on: null });
}

const permissionAdd = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);

  const exist = await PermissionModel.findOne({ per_name: data.per_name, per_archived_on: null });
  if (exist) throw errorManager.getHttpError('ALREADY_EXISTS');

  let dataForAdd = data;
  // to get parent permission data by ID
  if (data.per_parent_id) {
    const parentPerData = await PermissionModel.findOne({ per_id: data.per_parent_id, per_archived_on: null }, { _id: 0, per_id: 1, per_name: 1 });
    if (!parentPerData) throw errorManager.getHttpError('DATA_NOT_FOUND')
    dataForAdd = _.assign(dataForAdd, { per_parent: parentPerData })
  }

  [dataForAdd.per_created_by, dataForAdd.per_updated_by] = [data.session, data.session];
  return await PermissionModel.create(dataForAdd);
}

const permissionUpdate = async (req: Request, perData: any) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);

  const exist = await PermissionModel.findOne({ per_id: { $ne: data.per_id }, per_name: data.per_name, per_archived_on: null });
  if (exist) throw errorManager.getHttpError('ALREADY_EXISTS');

  let dataForAdd = data;
  // to get parent permission data by ID
  if (data.per_parent_id && (!perData.per_parent || perData.per_parent.per_id !== data.per_parent_id)) {
    let parentPerData = await PermissionModel.findOne({ per_id: data.per_parent_id, per_archived_on: null }, { _id: 0, per_id: 1, per_name: 1, });
    if (!parentPerData) throw errorManager.getHttpError('DATA_NOT_FOUND');
    dataForAdd = _.assign(dataForAdd, { per_parent: parentPerData })
  }

  dataForAdd.per_updated_by = data.session;
  dataForAdd.per_updated_on = new Date();
  return await PermissionModel.updateOne({ per_id: data.per_id }, dataForAdd);
}

const permissionStatusUpdate = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  return await PermissionModel.updateOne({ per_id: data.per_id }, { per_status: data.per_status, per_updated_on: new Date(), per_updated_by: data.session });
}

const permissionDelete = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  return await PermissionModel.updateOne({ per_id: data.per_id }, { per_archived_on: new Date(), per_archived_by: data.session });
}

export { permissionPagging, permissionGet, permissionLookup, permissionAdd, permissionUpdate, permissionStatusUpdate, permissionDelete, permissionAll }
