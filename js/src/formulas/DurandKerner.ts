export default function DurandKerner (f: (x: number) => number, rootsNumber = 1, iterationCount = 15) {
  const roots = []
  for (let i = 0; i < rootsNumber; i++) {
    roots.push(i + 1)
  }

  for (let k = 0; k < iterationCount; k++) {
    for (let i = 0; i < rootsNumber; i++) {
      let down = 1
      for (let j = 0; j < rootsNumber; j++) {
        if (i !== j) {
          down *= roots[i] - roots[j]
        }
      }
      roots[i] -= f(roots[i]) / down
    }
  }

  return roots
}
