import { parentPort, workerData } from 'node:worker_threads';

// START node main.js

// n should be received from main thread
const nthFibonacci = (n = workerData) => {
  return n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

const sendResult = () => {
  parentPort.postMessage(nthFibonacci());
};

sendResult();
