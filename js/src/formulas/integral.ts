export default function integral (f: (x: number) => number, density = 5) {
  const g = (a: number, b: number) => {
    let sum = 0
    for (let k = a; k < b; k += 10 ** (-density)) {
      sum += (f(k + 10 ** (-density)) + f(k)) / 2 * 10 ** (-density)
    }
    return sum
  }

  return g
}
