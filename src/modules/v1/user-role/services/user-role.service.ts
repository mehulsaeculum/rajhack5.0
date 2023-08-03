// external packages
import _ from 'lodash';
import { Request } from 'express';

// helpers
import errorManager from '../../../../helpers/error-manager';

// models
import UserRoleModel from '../../../../models/user.role.model';
import UserModel from '../../../../models/user.model';

// common functions
import { escapeRegExp } from '../../../../functions/common';

const userRolePagging = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  if (!data.sort_by) data.sort_by = 'usrl_updated_on';
  return await UserRoleModel.paginate(data, { usrl_archived_on: null });
}

const userRoleExport = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  if (!data.sort_by) data.sort_by = 'usrl_updated_on';
  return await UserRoleModel.fileExport(data, { usrl_archived_on: null })
}

const userRoleGet = async (id: string) => {
  const response = await UserRoleModel.findOne({ usrl_id: id, usrl_archived_on: null })
  if (!response) throw errorManager.getHttpError('DATA_NOT_FOUND');
  return response;
}

const userRoleLookup = async (query: any) => {
  const conditions: any = { usrl_status: 'active', usrl_archived_on: null }
  if (query && !!query.master) conditions.usrl_associate = null; // To get the master roles
  return await UserRoleModel.find(conditions, { usrl_id: 1, usrl_name: 1 })
}

const userRoleAdd = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);

  const exist = await UserRoleModel.findOne({ usrl_name: { $regex: `^${escapeRegExp(data.usrl_name)}$`, '$options': 'i' }, usrl_archived_on: null })
  if (exist) throw errorManager.getHttpError('ALREADY_EXISTS');

  const userRoleData = _.assign(data, { usrl_created_by: data.session, usrl_updated_by: data.session });
  return await UserRoleModel.create(userRoleData);
}

const userRoleUpdate = async (req: Request) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  // restrict the master role to becomes inactive
  if (data.usrl_default && data.usrl_status !== 'active') throw errorManager.getHttpError('ROLE_UPDATE_ACTION_FORBIDDEN');

  // restrict the assigned role to becomes inactive
  if (data.usrl_status !== 'active') {
    const isExist = await UserModel.findOne({ 'user_fk_usrl_id': data.usrl_id, user_archived_on: null });
    if (isExist) throw errorManager.getHttpError('ROLE_USED');
  }

  const exist = await UserRoleModel.findOne({ usrl_name: { $regex: `^${escapeRegExp(data.usrl_name)}$`, '$options': 'i' }, usrl_id: { $ne: data.usrl_id }, usrl_archived_on: null })
  if (exist) throw errorManager.getHttpError('ALREADY_EXISTS');

  const urData = _.assign(data, { usrl_updated_by: data.session, usrl_updated_on: new Date() });
  return await UserRoleModel.updateOne({ usrl_id: data.usrl_id }, urData);
}

const userRoleStatusUpdate = async (req: Request, userRoleData: any) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);
  // restrict the master role to becomes inactive
  if (userRoleData.usrl_default) throw errorManager.getHttpError('ROLE_UPDATE_ACTION_FORBIDDEN');

  // restrict the assigned role to becomes inactive
  if (data.usrl_status !== 'active') {
    const isExist = await UserModel.findOne({ 'user_fk_usrl_id': data.usrl_id, user_archived_on: null });
    if (isExist) throw errorManager.getHttpError('ROLE_USED');
  }

  return await UserRoleModel.updateOne({ usrl_id: data.usrl_id }, { usrl_status: data.usrl_status, usrl_updated_by: data.session, usrl_updated_on: new Date() });
}

const userRoleDelete = async (req: Request, userRoleData: any) => {
  const data = Object.assign(req.body, req.params, req.query, req.user);

  // restrict the master role to becomes archive
  if (userRoleData.usrl_default) throw errorManager.getHttpError('ROLE_DELETE_ACTION_FORBIDDEN');

  // restrict the assigned role to becomes archive
  const isExist = await UserModel.findOne({ 'user_fk_usrl_id': data.usrl_id, user_archived_on: null });
  if (isExist) throw errorManager.getHttpError('ROLE_USED');

  await UserRoleModel.updateOne({ usrl_id: data.usrl_id }, { usrl_archived_by: data.session, usrl_archived_on: new Date() });
}


export { userRolePagging, userRoleExport, userRoleGet, userRoleLookup, userRoleAdd, userRoleUpdate, userRoleStatusUpdate, userRoleDelete }
