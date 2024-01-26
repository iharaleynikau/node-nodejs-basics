import { createWriteStream, createReadStream } from 'node:fs';
import zlib from 'node:zlib';

const compress = async () => {
  const gzip = zlib.createGzip();

  const readStream = createReadStream('./files/fileToCompress.txt');
  const writeStream = createWriteStream('./files/archive.gz');

  readStream.pipe(gzip).pipe(writeStream);
};

await compress();
