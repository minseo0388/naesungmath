export default function factorial (n: number) {
  const init = 1
  let result
  for (let i = 1; i <= n; i++) {
    result = init * i
  }
  return result
}
