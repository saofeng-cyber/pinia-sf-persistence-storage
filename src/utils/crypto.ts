import CryptoJS from "crypto-js";
const SECRET = "__SAOFENG__";
export const encypto = (data: any): string => {
  const dataStr = JSON.stringify(data);
  return CryptoJS.AES.encrypt(dataStr, SECRET).toString();
};
export const decrypto = (data: any) => {
  const str = CryptoJS.AES.decrypt(data, SECRET).toString(CryptoJS.enc.Utf8);
  if (str) {
    return JSON.parse(str);
  }
  return null;
};
