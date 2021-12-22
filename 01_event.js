const Emitter = require('events')

const emitter = new Emitter()

const handler = (data) => {
  console.log('Event Message', data)
}

emitter.on('message', handler)

emitter.prependListener('message', () => {
  console.log('Prepend')
})

emitter.emit('message', { text: 'Message', id: 1 })

// emitter.off('message', handler)

emitter.once('msg', () => console.log('Only one handler'))

emitter.emit('msg')
emitter.emit('msg')

console.log(emitter.getMaxListeners())
emitter.setMaxListeners(5)
console.log(emitter.getMaxListeners())
console.log(emitter.listenerCount('message'))
console.log(emitter.listenerCount('msg'))
console.log(emitter.listeners('message'))
console.log(emitter.eventNames())

emitter.on('error', (err) => console.log(`Error: ${err.message}`))

emitter.emit('error', new Error('BOOM!'))
