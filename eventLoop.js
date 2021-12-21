// const start = performance.now()

// setTimeout(() => {
//   console.log(performance.now() - start)
//   console.log('Delay 1 sec')
// }, 1000)

// function myF(arg) {
//   console.log(`Arg: ${arg}`)
// }

// setTimeout(myF, 1000, 'arg1')

// const timeoutId = setTimeout(() => console.log('Boom!'), 5000)

// setTimeout(() => {
//   clearTimeout(timeoutId)
//   console.log('Clear!')
// }, 1000)

// const intervalId = setInterval(() => console.log(performance.now()), 1000)

// setTimeout(() => {
//   clearInterval(intervalId)
//   console.log('Clear!')
// }, 5500)
console.log('Before')

setImmediate(() => console.log('After Everything'))

console.log('After')

const timeoutId = setTimeout(() => console.log('Boom!'), 2000)

timeoutId.unref()

setImmediate(() => timeoutId.ref())
