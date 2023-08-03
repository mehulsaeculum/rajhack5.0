// external packages
import ffmpeg from 'fluent-ffmpeg';
import moment from 'moment';
import { Stream } from 'stream';

// error managers
import errorManager from '../../../../helpers/error-manager';

// config data
import { MEDIA_FILE_TYPE, MEDIA_VALIDATION } from '../../../../config/general';

const getFileMetadata = (media_buffer: Buffer) => {
  const readableStream = new Stream.PassThrough();
  readableStream.end(media_buffer);

  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(readableStream)
      .ffprobe(function (err, metadata) {
        if (err) {
          reject(errorManager.getHttpError('SOMETHING_WENT_WRONG'));
        } else {
          const { width, height } = metadata?.streams[0] || {};
          const length = (metadata.format.duration)?.toFixed(2);
          resolve({ width, height, length });
        }
      });
  });
}

const validateMedia = (mediaType: string, fileType: string, metaData: any) => {
  const [mType, fType] = [mediaType.toUpperCase(), fileType.toUpperCase()];
  const mediaValidateObject = MEDIA_VALIDATION[mType][fType]; // Get media validations from config

  let size = parseFloat(metaData?.size?.value || 0);
  if (metaData.size.unit === 'KB') {
    size = size / 1024;
  }

  // size validation
  if (size > mediaValidateObject.SIZE) {
    return false;
  }
  // mime type validation
  if (!mediaValidateObject.MIME.includes(metaData.mime)) {
    return false;
  }
  // dimension (width*height) validation
  if (mediaValidateObject.DIMENSION.length > 0) {
    const width = metaData?.width?.value || 0;
    const height = metaData?.height?.value || 0;

    for (let i = 0; i < mediaValidateObject.DIMENSION.length; i++) {
      if ((mediaValidateObject.DIMENSION[i].width === width) && (mediaValidateObject.DIMENSION[i].height === height)) {
        return true;
      }
    }
    return false;
  }

  return true;
}

const buildFilePath = (module: string, mediaType: string, fileType: string) => {
  let directory = '';

  if (module === 'user') {
    directory = process.env.USER_IMAGE_DIRECTORY || '';
  } else if (module === 'target') {
    directory = process.env.TARGET_IMAGE_DIRECTORY || '';
  }

  if (fileType === MEDIA_FILE_TYPE.THUMBNAIL) {
    directory = `${directory}/${MEDIA_FILE_TYPE.THUMBNAIL}`;
  }

  return `${moment().format('YYYY-MM-DD')}/${directory}`;
}

export { getFileMetadata, validateMedia, buildFilePath }