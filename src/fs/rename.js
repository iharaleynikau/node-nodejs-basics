import { rename as fsRename } from 'node:fs';
import doesExist from './doesExist.js';

const rename = async () => {
  const fileToRemove = './files/wrongFilename.txt';
  const properFile = './files/properFilename.md';

  const isFileToRemoveExisting = await doesExist(fileToRemove);
  const isProperFileExisting = await doesExist(properFile);

  if (!isFileToRemoveExisting || isProperFileExisting) {
    throw new Error('FS operation failed');
  } else {
    fsRename(fileToRemove, properFile, () => {});
  }
};

await rename();
