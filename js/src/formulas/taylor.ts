export default function taylor (f: (x: number) => number, a: number, count: number) {
  const diffs = [(x) => f(a)] as ((x: number) => number)[]
  const taylors = [] as ((x: number) => number)[]
  const fact = [1]

  function diff (fun: (x: number) => number, density = 5) {
    const dx = 2 * (10 ** -density)
    const dy = (x: number) => fun(x + (10 ** -density)) - fun(x - (10 ** -density))
    return (x: number) => dy(x) / dx
  }

  taylors.push((x) => diffs[0](x))

  for (let i = 1; i <= count; i++) {
    diffs.push(diff(diffs[i - 1]))
    let factorial = 1
    for (let j = 1; j <= i; j++) {
      factorial *= j
    }
    fact.push(factorial)

    taylors.push(
      function (x) {
        return diffs[i](a) / fact[i] * ((x - a) ** i)
      }
    )
  }

  function res (x: number) {
    // eslint-disable-next-line no-undef
    let result = 0
    for (let i = 0; i <= count; i++) {
      // eslint-disable-next-line no-undef
      result += taylors[i](x)
    }
    // eslint-disable-next-line no-undef
    return result
  }

  return res
}
