const { compute } = require('./factorial')

process.on('message', (data) => {
  process.send(compute(data))
  process.disconnect()
})
