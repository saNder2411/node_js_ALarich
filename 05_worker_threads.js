// - инициализация
// ## Фазы
// nextTick, microtaskQueue
// - timeouts
// nextTick, microtaskQueue
// - pending callbacks
// nextTick, microtaskQueue
// - idle, prepare
// nextTick, microtaskQueue
// -poll (I/O)
// nextTick, microtaskQueue
// -check (setImmediate)
// nextTick, microtaskQueue
// - close callback (emitter.on('close', () => {}))

// check on ending

const crypto = require('crypto')
const os = require('os')

const start = performance.now()

// process.env.UV_THREADPOOL_SIZE = os.cpus().length


// Threadpool
const runCrypto = () => {
  for (let i = 0; i < 32; i++) {
    crypto.pbkdf2('test', 'salt', 10000, 64, 'sha512', () => {
      console.log(performance.now() - start)
    })
  }
}

// runCrypto()

const https = require('https')
// Not Threadpool
const runHttps = () => {
  for (let i = 0; i < 32; i++) {
    https.get('https://google.com', (res) => {
      res.on('data', () => {})
      res.on('end', () => {
        console.log(performance.now() - start)
      })
    })
  }
}

runHttps()
