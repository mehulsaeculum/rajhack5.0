// external packages
import path from 'path';

interface mediaImage {
  name?: string;
  ext: string;
  mime: string;
  size: object;
  path?: string;
  width: object;
  height: object;
  length: object;
}

const fileDetails = (file: any) => {
  let fileSize = {};
  
  // converts file size unit
  if (((file.size) / 1024) > 1024) {
    fileSize = {
      value: parseFloat((((file.size) / 1024) / 1024).toFixed(2)),
      unit: 'MB'
    }
  } else {
    fileSize = {
      value: parseFloat(((file.size) / 1024).toFixed(2)),
      unit: 'KB'
    }
  }

  const details: mediaImage = {
    ext: (path.extname(file.originalname)).substring(1) || '',
    mime: file?.mimetype || '',
    size: fileSize,
    width: {},
    height: {},
    length: {}
  }

  return details;
}

export { fileDetails }