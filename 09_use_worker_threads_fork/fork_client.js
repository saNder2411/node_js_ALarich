process.on('message', (msg) => {
  if (msg === 'disconnect') return process.disconnect()

  console.log(`The client received the message: ${msg}`)

  process.send('Pong!')
})
