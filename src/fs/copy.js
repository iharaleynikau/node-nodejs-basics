import { cp } from 'node:fs';
import doesExist from './doesExist.js';

const copy = async () => {
  const isDirExisting = await doesExist('./files');
  const isDirCopyExisting = await doesExist('./files_copy');

  if (!isDirExisting || isDirCopyExisting) {
    throw new Error('FS operation failed');
  } else {
    cp('./files/', './files_copy', { recursive: true }, err => {});
  }
};

await copy();
