function getFactorial(n) {
  if (n === 1 || n === 0) return 1

  return getFactorial(n - 1) * n
}

function compute({ array }) {
  const arr = []
  for (let i = 0; i < 100000000; i++) {
    arr.push(i * i)
  }
  return array.map((n) => getFactorial(n))
}

module.exports = { getFactorial, compute }
