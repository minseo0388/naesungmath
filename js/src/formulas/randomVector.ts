export default function randomVector (len: number, norm = 1) {
  const x = []

  let currentNorm = 0

  for (let i = 0; i < len; i++) {
    x.push(Math.random())
    currentNorm += Math.abs(x[i]) ** 2
  }

  currentNorm = currentNorm ** 0.5

  for (let i = 0; i < len; i++) {
    x[i] *= norm / currentNorm
  }

  return x
}
