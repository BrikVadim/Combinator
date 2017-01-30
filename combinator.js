const arrange = args => Array.prototype.sort.call(args, (a, b) => +a < +b)

const factorial = n => {
  const iterator = (current, acc) => {
    if (current > 0) {
      return iterator(current - 1, acc * current)
    } else if (current === 0) {
      return acc
    } else {
      throw new RangeError('The function argument must be a positive number');
    }
  }
  return iterator(n, 1)
}

const P = factorial

const A = (n, m) => {
  arrange(arguments)
  return factorial(n) / factorial(n - m)
}

const C = (n, m) => {
  arrange(arguments)
  return factorial(n) / (factorial(m) * factorial(n - m))
}

const Bernoulli = (n, m, p, q) => {
  [n, m] = n > m ? [n, m] : [m, n]
  return C(n, m) * p ** m * q ** (n - m)
}

const BernoulliAtRange = (n, m, p, q) => {
  let result = []
  for (;m != 0; m--) result.push(Bernoulli(n, m, p, q))
  return result
}
