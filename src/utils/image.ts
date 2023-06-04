import Tesseract from 'tesseract.js';
import {PassportProps} from '@/type/passport';

export const base64ToFile = async (base64String: string, filename: string): Promise<File> => {
  // Convert the base64 string to a Blob
  const byteCharacters = atob(base64String.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], {type: 'image/png'});

  // Create a File object from the Blob
  return new File([blob], filename, {type: 'image/png'});
};

export const extractTextFromImage = async (file: File) => {
  const result = await Tesseract.recognize(file, 'eng', {
    tessedit_char_whitelist: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<',
    preserve_interword_spaces: 1
  });
  return result.data.text;
};

export const getPassportInfo = async (file: File): Promise<PassportProps> => {
  const text = await extractTextFromImage(file);
  const passportNumber = text.match(/P\d{7}/)?.[0] || '';
  const nameMatch = text.match(/(Given Names:|LastName:).*?\n(.*)/);
  const lastName = nameMatch?.[2].split('/')?.[0] || '';
  const firstName = nameMatch?.[2].split('/')?.[1] || '';
  return {passportNumber, lastName, firstName};
};
