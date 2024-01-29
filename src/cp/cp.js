import { spawn } from 'node:child_process';

const spawnChildProcess = async args => {
  const spawnChildProcess = spawn('node', ['./files/script.js', ...args], {
    stdio: [process.stdin, process.stdout, process.stderr]
  });

  await new Promise((resolve, reject) => {
    spawnChildProcess.on('exit', () => {
      resolve();
    });

    spawnChildProcess.on('error', err => {
      reject(err);
    });
  });
};

spawnChildProcess(['-s', '--arg1', '--arg2', '-E']);
