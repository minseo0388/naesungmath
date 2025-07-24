export default function gaussian (matrix: number[][], m: number, n: number) {
  const X = [] as number[][]
  for (let i = 0; i < matrix.length; i++) {
    X.push([])
    for (let j = 0; j < matrix[i].length; j++) {
      X[i].push(matrix[i][j])
    }
  }

  for (let i = 0; i < n; i++) {
    const k = X[i][i]
    for (let j = 0; j < m; j++) {
      X[i][j] /= k
    }
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const ratio = X[j][i]
        for (let l = 0; l < matrix[j].length; l++) {
          X[j][l] -= ratio * X[i][l]
        }
      }
    }
  }

  return X
}
