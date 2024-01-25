import { createReadStream } from 'node:fs';

const read = async () => {
  const readableStream = createReadStream('./files/fileToRead.txt');

  readableStream.on('data', chunk => {
    process.stdout.write(chunk);
  });
};

await read();
