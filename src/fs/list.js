import { readdir } from 'node:fs';
import doesExist from './doesExist.js';

const list = async () => {
  const fileFolder = './files';
  const isFileFolderExisting = await doesExist(fileFolder);

  if (!isFileFolderExisting) {
    throw new Error('FS operation failed');
  } else {
    readdir(fileFolder, (err, files) => {
      files.forEach(file => {
        console.log(file);
      });
    });
  }
};

await list();
