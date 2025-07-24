export default function GaussSeidel (mat: number[][], iterationCount = 15) {
  const x = []

  for (let i = 0; i < mat.length; i++) {
    x.push(1)
  }

  for (let k = 0; k < iterationCount; k++) {
    for (let i = 0; i < mat.length; i++) {
      let n = 0
      for (let j = 0; j < mat.length; j++) {
        if (j !== i) {
          n += mat[i][j] * x[j]
        }
      }
      x[i] = 1 / mat[i][i] * (mat[i][mat[0].length - 1] - n)
    }
  }

  return x
}
