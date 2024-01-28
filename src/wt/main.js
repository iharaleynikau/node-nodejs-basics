import { Worker, isMainThread, threadId, workerData } from 'node:worker_threads';
import os from 'node:os';

const performCalculations = async () => {
  const cpuCoresCount = os.cpus().length;

  let startNumber = 10;

  const resultColl = [];

  for (let i = 1; i <= cpuCoresCount; i++) {
    const worker = new Worker('./worker.js', {
      workerData: startNumber++
    });

    worker.on('error', err => {
      resultColl.push({
        status: 'error',
        data: null
      });
    });

    worker.once('message', result => {
      resultColl.push({
        status: 'resolved',
        data: result
      });

      if (resultColl.length === cpuCoresCount) {
        console.log(resultColl);
      }
    });

    worker.on('exit', () => {});
  }
};

await performCalculations();
