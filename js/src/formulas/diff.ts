export default function diff (f: (x: number) => number, density = 5) {
  const dx = 2 * (10 ** (-density))
  const dy = (x: number) => f(x + (10 ** (-density))) - f(x - (10 ** (-density)))

  return (x: number) => dy(x) / dx
}
