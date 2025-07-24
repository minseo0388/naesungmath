function decimalToFraction(decimal) {
  let numerator = decimal.toString().replace(/\d+[.]/, '')
  const denominator = Math.pow(10, numerator.length)
  if (decimal > 1) {
    numerator = +numerator + Math.floor(decimal) * denominator
  }

  const gcd = (a, b) => (b ? gcd(b, a % b) : a)
  const x = gcd(numerator, denominator)
  return {
    top: numerator / x,
    bottom: denominator / x,
    display: numerator / x + ':' + denominator / x
  }
}