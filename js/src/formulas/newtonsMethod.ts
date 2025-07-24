export default function newtonsMethod (f: (x: number) => number, count: number, initx = 2) {
  function diff (f: (x: number) => number, x: number, density = 5) {
    const dx = 2 * (10 ** -density)
    const dy = f(x + (10 ** -density)) - f(x - (10 ** -density))
    return dy / dx
  }

  function newtonGo (f: (x: number) => number, x: number, go = 0): number {
    const next = x - f(x) / diff(f, x)
    if (go === count - 1) {
      return next
    }
    return newtonGo(f, next, go + 1)
  }

  return newtonGo(f, initx, 0)
}
