import { readdir } from 'node:fs';
import doesExist from './doesExist.js';

const list = async () => {
  const fileFolder = './files';
  const isFileFolderExisting = await doesExist(fileFolder);

  if (!isFileFolderExisting) {
    throw new Error('FS operation failed');
  }

  const promise = new Promise((resolve, reject) => {
    readdir(fileFolder, (err, files) => {
      resolve(files);
    });
  });

  const res = await promise;

  console.log(res);
};

await list();
