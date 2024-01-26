import { createWriteStream, createReadStream } from 'node:fs';
import zlib from 'node:zlib';

const decompress = async () => {
  const readStream = createReadStream('./files/archive.gz');

  readStream.pipe(zlib.createGunzip()).pipe(createWriteStream('./files/fileToCompress.txt'));
};

await decompress();
