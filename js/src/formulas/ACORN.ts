export default function ACORN (seed = new Date().getTime(), moduloPower = 60, order = 10) {
  const M = 2 ** moduloPower

  const temp = +(seed.toString().split('').reverse().join(''))
  seed = seed * temp

  function oddorplusone (n: number) {
    if (n % 2 === 1) {
      return n
    } else {
      return n + 1
    }
  }

  seed = oddorplusone(seed % M)

  const seed2 = (seed + 2) % M

  const go = function (m: number, n: number): number {
    if (m === 0) {
      return seed
    } else if (n === 0) {
      return seed2
    } else {
      return (go(m - 1, n) + go(m, n - 1)) % M
    }
  }

  const xk = go(order, order)

  return xk / M
}
