import { createWriteStream } from 'node:fs';

// node write.js and type random text

const write = async () => {
  const writeableStream = createWriteStream('./files/fileToWrite.txt');

  process.stdin.on('data', data => {
    if (data) {
      writeableStream.write(data);
      console.log('\nData has been written to ./files/fileToWrite.txt. (press ctrl+z to leave)\n');
    }
  });
};

await write();
