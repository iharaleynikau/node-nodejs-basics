import { writeFile } from 'node:fs';
import doesExist from './doesExist.js';

const create = async () => {
  const fileName = 'fresh.txt';
  const filePath = './files/' + fileName;
  const fileContent = 'I am fresh and young';

  const isFileExisting = await doesExist(filePath);

  if (isFileExisting) {
    throw new Error('FS operation failed');
  } else {
    writeFile('./files/fresh.txt', fileContent, err => {});
  }
};

await create();
