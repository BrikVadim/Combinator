const P = factorial
const arrange = (args) => Array.prototype.sort.call(args, (a, b) => +a < +b)

function factorial(n) {
  if (n > 0 && n <= 170) {
    return n * factorial(n - 1)
  } else if (n === 0) {
    return 1
  } else {
    throw new RangeError('Параметр должен быть положительным числом не больше 170');
  }
}

function A(n, m) {
  arrange(arguments)
  return factorial(n) / factorial(n - m)
}

function C(n, m) {
  arrange(arguments)
  return factorial(n) / (factorial(m) * factorial(n - m))
}

function Bernoulli(n, m, p, q) {
  [n, m] = n > m ? [n, m] : [m, n]
  return C(n, m) * p ** m * q ** (n - m)
}

function BernoulliAtRange(n, m, p, q) {
  let result = []
  for (;m != 0; m--) result.push(Bernoulli(n, m, p, q))
  return result
}
