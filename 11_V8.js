// node --print-bytecode 11_V8.js
const main = () => {
  const a = 15
  return a * 17
}

main()

// Garbage Collector
// node --expose-gc --trace_gc_verbose 11_V8.js
let outer = null
function run() {
  let inner = outer
  function unused() {
    if (inner) {
      console.log('hi')
    }
  }

  outer = {
    longStr: new Array(1000000).join('*'),
  }
}

setInterval(run, 1000)
