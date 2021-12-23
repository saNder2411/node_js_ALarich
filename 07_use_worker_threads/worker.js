const { parentPort, workerData } = require('worker_threads')
const getFactorial = require('./factorial')

const compute = ({ array }) => {
  const arr = []
  for (let i = 0; i < 10000000; i++) {
    arr.push(i * i)
  }
  return array.map((n) => getFactorial(n))
}

parentPort.postMessage(compute(workerData))
