// external packages
import multer from 'multer';
import path from 'path';
import { Storage } from '@google-cloud/storage';

// error manager
import errorManager from '../helpers/error-manager';

// google cloud storage credentials
const serviceKey = path.join(__dirname, '../config/gcp-cred.json');

const fileUpload = multer({ storage: multer.memoryStorage() });

const newStorage = new Storage({
  keyFilename: serviceKey,
  projectId: process.env.GCP_PROJECT_ID,
});

const uploadFileToGCS = (fileBuffer: Buffer, fileName: string) => new Promise((resolve, reject) => {
  const bucket = newStorage.bucket(process.env.GCP_BUCKET_NAME || '');
  const file = bucket.file(fileName);
  const blobStream = file.createWriteStream({ resumable: false });

  blobStream.on('finish', () => {
    const publicUrl = `${process.env.GCP_DOMAIN_NAME}/${process.env.GCP_BUCKET_NAME}/${file.name}`;
    resolve(publicUrl);
  }).on('error', () => {
    reject(errorManager.getHttpError('GCP_UPLOAD_FAILED'));
  }).end(fileBuffer);

});

const removeFileFromGCS = async (fileName: string) => {
  const url = fileName;
  const prefix = `${process.env.GCP_DOMAIN_NAME}/${process.env.GCP_BUCKET_NAME}/`;
  const file_name = url.replace(prefix, '');
  const bucket = newStorage.bucket(process.env.GCP_BUCKET_NAME || '');
  const file = bucket.file(file_name);
  file.delete();
}

export { fileUpload, uploadFileToGCS, removeFileFromGCS }
