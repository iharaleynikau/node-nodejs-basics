import { unlink } from 'node:fs';
import doesExist from './doesExist.js';

const remove = async () => {
  const fileToRemove = './files/fileToRemove.txt';

  const isFileExisting = await doesExist(fileToRemove);

  if (!isFileExisting) {
    throw new Error('FS operation failed');
  } else {
    unlink(fileToRemove, () => {});
  }
};

await remove();
