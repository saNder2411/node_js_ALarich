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

const a = 5

function b() {
  c()
}

function c() {
  d()
}

function d() {
  console.log(`const a`, a)
}

setTimeout(() => {
  console.log('Timeout', performance.now())
}, 1000)

b()
