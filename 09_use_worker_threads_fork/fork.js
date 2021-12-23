const { fork } = require('child_process')
const path = require('path')

const forkProcess = fork(path.join(__dirname, 'fork_client.js'))

forkProcess.on('message', (msg) => {
  console.log(`The fork received the message: ${msg}`)
})

forkProcess.on('close', (code) => {
  console.log(`Exited: ${code}`)
})

forkProcess.send('Ping')

forkProcess.send('disconnect')
