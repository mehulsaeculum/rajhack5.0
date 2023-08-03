// external packages
import path from 'path';
import sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';

// http responses
import httpResponse from '../../../../helpers/http-response';

// error managers
import errorManager from '../../../../helpers/error-manager';

// services
import * as userService from '../services/user.service';

// config data
import { MEDIA_FILE_TYPE, MEDIA_TYPE, MEDIA_UNIT } from '../../../../config/general';

// mapper functions
import { fileDetails } from '../handler/user.mapper';

// handler functions
import { buildFilePath, getFileMetadata, validateMedia } from '../handler/user.handler';

// common functions
import { uploadFileToGCS } from '../../../../functions/file';

const userPagging = async (req: Request, res: Response) => {
  try {
    const response = await userService.userPagging(req);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const userExport = async (req: Request, res: Response) => {
  try {
    const response = await userService.userExport(req);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const userById = async (req: Request, res: Response) => {
  try {
    const response = await userService.userById(req.params.user_id);
    const rolePermission = await userService.userRolePermissionByRoleId(response.user_role?.usrl_id || '');
    httpResponse.sendSuccess(res, { ...(response.toObject()), access: rolePermission });
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const bulkUserGet = async (req: Request, res: Response) => {
  try {
    const response = await userService.bulkUserGet(req?.body);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const userProfileGet = async (req: Request, res: Response) => {
  try {
    const data = Object.assign(req.body, req.params, req.query, req.user);
    await userService.userById(data.user_id); // Check user exists or not
    const response = await userService.userProfileGet(data.user_id);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const userLookup = async (req: Request, res: Response) => {
  try {
    const data = Object.assign(req.headers);
    const response = await userService.userLookup(data['x-target']);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const userInsert = async (req: Request, res: Response) => {
  try {
    const response = await userService.userInsert(req);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const userUpdate = async (req: Request, res: Response) => {
  try {
    const user = await userService.userById(req.params.user_id);
    const response = await userService.userUpdate(req, user);
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const userTargetUpdate = async (req: Request, res: Response) => {
  try {
    await userService.userById(req.params.user_id);
    await userService.userTargetUpdate(req);
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const userProfileUpdate = async (req: Request, res: Response) => {
  try {
    await userService.userById(req.params.user_id);
    await userService.userProfileUpdate(req);
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const userPasswordUpdate = async (req: Request, res: Response) => {
  try {
    await userService.userById(req.params.user_id);
    await userService.userPasswordUpdate(req);
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const userStatusUpdate = async (req: Request, res: Response) => {
  try {
    await userService.userById(req.params.user_id);
    await userService.userStatusUpdate(req);
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const userDelete = async (req: Request, res: Response) => {
  try {
    await userService.userById(req.params.user_id);
    await userService.userDelete(req);
    httpResponse.sendSuccess(res);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

const fileUpload = async (req: Request, res: Response) => {
  try {
    // check file uploaded or not
    if (!req.file) {
      httpResponse.sendFailer(req, res, errorManager.getHttpError('NO_FILE_UPLOADED'), null);
      return;
    }
    const [uploadedFile, data] = [req.file, Object.assign(req.body)];

    /**
     * handle file type error
     */
    if ((data.file_type === MEDIA_FILE_TYPE.THUMBNAIL || data.media_type === MEDIA_TYPE.IMAGE) && !uploadedFile.mimetype.includes(MEDIA_TYPE.IMAGE)) {
      httpResponse.sendFailer(req, res, errorManager.getHttpError('FILE_TYPE_ERROR'), null);
      return;
    }
    if ((data.media_type === MEDIA_TYPE.VIDEO && data.file_type === MEDIA_FILE_TYPE.ORIGINAL) && !uploadedFile.mimetype.includes(MEDIA_TYPE.VIDEO)) {
      httpResponse.sendFailer(req, res, errorManager.getHttpError('FILE_TYPE_ERROR'), null);
      return;
    }

    let mediaDetails = fileDetails(uploadedFile); // Map file metadata
    const newFileName = `${Date.now()}-${uuidv4()}${path.extname(uploadedFile.originalname)}`;

    /**
     * get media height, width and length for image and video type
     */
    if (data.file_type === MEDIA_FILE_TYPE.THUMBNAIL || data.media_type === MEDIA_TYPE.IMAGE || data.media_type === MEDIA_TYPE.VIDEO) {
      if (data.file_type === MEDIA_FILE_TYPE.ORIGINAL && data.media_type === MEDIA_TYPE.VIDEO) {
        const metadata: any = await getFileMetadata(uploadedFile.buffer);
        mediaDetails.width = (metadata.width) ? { value: parseInt(metadata.width), unit: MEDIA_UNIT.WIDTH } : {};
        mediaDetails.height = (metadata.height) ? { value: parseInt(metadata.height), unit: MEDIA_UNIT.HEIGHT } : {};
        mediaDetails.length = (metadata.length) ? { value: parseInt(metadata.length), unit: MEDIA_UNIT.LENGTH } : {};
      } else {
        const metadata: any = await sharp(uploadedFile.buffer).metadata();
        mediaDetails.width = (metadata.width) ? { value: parseInt(metadata.width), unit: MEDIA_UNIT.WIDTH } : {};
        mediaDetails.height = (metadata.height) ? { value: parseInt(metadata.height), unit: MEDIA_UNIT.HEIGHT } : {};
      }
    }

    // get file directory
    const directory = buildFilePath(data.module, data.media_type, data.file_type);

    // media module validations
    if (data.module === 'media') {
      if (!validateMedia(data.media_type, data.file_type, mediaDetails)) {
        httpResponse.sendFailer(req, res, errorManager.getHttpError('FILE_TYPE_ERROR'), null);
        return;
      }
    }

    const fileUrl = await uploadFileToGCS(uploadedFile.buffer, `${directory}/${newFileName}`); // URL of Google Cloud Storage
    const response = {
      file_name: newFileName,
      path: fileUrl || '',
      original_name: uploadedFile.originalname,
      name: newFileName,
      ...mediaDetails
    }
    httpResponse.sendSuccess(res, response);
  } catch (err: any) {
    httpResponse.sendFailer(req, res, err, null);
  }
}

export {
  userPagging, userExport, userById, userProfileGet, userLookup, userInsert, userUpdate, userDelete, userProfileUpdate, userStatusUpdate,
  userTargetUpdate, bulkUserGet, userPasswordUpdate, fileUpload
}
