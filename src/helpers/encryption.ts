// external packages
import 'dotenv/config';
import CryptoJS from 'crypto-js';
import jwt from 'jwt-simple';

const createJWTToken = (data: any) => {
  return jwt.encode(data, process.env.DEFAULT_SECRET || '')
}

// encryption token
const encrypt = (value: string) => {
  const key = CryptoJS.enc.Utf8.parse(process.env.AES_SECRET_KEY || '');
  const iv = CryptoJS.enc.Utf8.parse(process.env.AES_SECRET_KEY || '');
  const encrypted = CryptoJS.AES.encrypt(value, key, {
    keySize: 16,
    iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}

// decryption token
const decrypt = (value: string) => {
  const key = CryptoJS.enc.Utf8.parse(process.env.AES_SECRET_KEY || '');
  const iv = CryptoJS.enc.Utf8.parse(process.env.AES_SECRET_KEY || '');
  return CryptoJS.AES.decrypt(value, key, {
    keySize: 16,
    iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  }).toString(CryptoJS.enc.Utf8);
}

export { encrypt, decrypt, createJWTToken }