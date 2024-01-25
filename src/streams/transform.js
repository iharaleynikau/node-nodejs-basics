import { Transform, Writable } from 'node:stream';

// node transform.js and type random text

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join(''));
    }
  });

  const writableStream = new Writable({
    write(chunk, encoding, callback) {
      process.stdout.write(chunk.toString() + '\n');
      callback();
    }
  });

  process.stdin.pipe(transformStream).pipe(writableStream);
};

await transform();
