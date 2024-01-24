import { readFile } from 'node:fs';
import doesExist from './doesExist.js';

const read = async () => {
  const fileToRead = './files/fileToRead.txt';
  const isFileToReadExisting = await doesExist(fileToRead);

  if (!isFileToReadExisting) {
    throw new Error('FS operation failed');
  } else {
    readFile(fileToRead, 'utf8', (err, data) => {
      console.log(data);
    });
  }
};

await read();
