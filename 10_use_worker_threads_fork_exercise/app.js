const { Worker } = require('worker_threads')
const { fork } = require('child_process')
const path = require('path')
const { performance, PerformanceObserver } = require('perf_hooks')

const performanceObserver = new PerformanceObserver((items) =>
  items.getEntries().forEach((entry) => console.log(`${entry.name}: ${entry.duration}`))
)

performanceObserver.observe({ entryTypes: ['measure'] })

const workerFunction = (array) =>
  new Promise((resolve, reject) => {
    performance.mark('startWorker')

    const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: { array } })

    worker.on('message', (data) => {
      performance.mark('endWorker')
      performance.measure('worker', 'startWorker', 'endWorker')
      resolve(data)
    })

    worker.on('error', (err) => reject(err))
  })

const forkFunction = (array) =>
  new Promise((resolve, reject) => {
    performance.mark('startFork')

    const forkProcess = fork(path.join(__dirname, 'fork.js'))
    forkProcess.send({ array })

    forkProcess.on('message', (data) => {
      performance.mark('endFork')
      performance.measure('fork', 'startFork', 'endFork')
      resolve(data)
    })

    forkProcess.on('error', (err) => reject(err))
  })

const main = async () => {
  await workerFunction([25, 19, 48, 30])

  await forkFunction([25, 19, 48, 30])
}

main()
