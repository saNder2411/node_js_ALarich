const { spawn } = require('child_process')

const childProcess = spawn(`ls`)

childProcess.stdout.on('data', (data) => {
  console.log(`stdout Data: ${data}`)
})

childProcess.stderr.on('data', (data) => {
  console.log(`stderr Data: ${data}`)
})

childProcess.on('exit', (code) => {
  console.log('Code exec', code)
})
