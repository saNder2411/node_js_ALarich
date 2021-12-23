const { Worker } = require('worker_threads')
const path = require('path')

const compute = (array) =>
  new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, 'worker.js'), { workerData: { array } })

    worker.on('message', (data) => {
      console.log(worker.threadId)
      resolve(data)
    })

    worker.on('error', (err) => {
      console.log(worker.threadId)
      reject(err)
    })

    worker.on('exit', () => {
      console.log('Worker is exit')
    })
  })

const main = async () => {
  try {
    performance.mark('start')
    const result = await Promise.all([
      compute([25, 20, 19, 48, 30, 50]),
      compute([25, 20, 19, 48, 30, 50]),
      compute([25, 20, 19, 48, 30, 50]),
      compute([25, 20, 19, 48, 30, 50]),
    ])
    console.log(result)
    performance.mark('end')
    performance.measure('main', 'start', 'end')
    console.log(performance.getEntriesByName('main'))
  } catch (err) {
    console.error(err.message)
  }
}

setTimeout(() => {
  console.log(`Worker dose'nt block thread`)
}, 200)
main()
