const factorial = n => {
  if (n > 0 && n <= 170) {
    return n * factorial(n - 1)
  } else if (n === 0) {
    return 1
  } else {
    throw new RangeError('Параметр должен быть положительным числом не больше 170');
  }
}
