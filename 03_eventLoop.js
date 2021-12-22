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

const fs = require('fs')

console.log('Init')

setTimeout(() => {
  console.log('Timer 0', performance.now())
}, 100)

setTimeout(() => {
  console.log('Timer 1', performance.now())
}, 100)

setImmediate(() => {
  console.log('Immediate')
})

fs.readFile(__filename, () => {
  console.log('File read')
})

setTimeout(() => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log('Done')
  Promise.resolve().then(() => {
    console.log('Promise inside Timeout')
  })
  process.nextTick(() => {
    console.log('NextTick inside Timeout')
  })
}, 0)

Promise.resolve().then(() => {
  console.log('Promise')
})

process.nextTick(() => {
  console.log('NextTick')
})

console.log('Final')
