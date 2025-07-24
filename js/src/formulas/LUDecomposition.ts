export default function LUDecomposition (matrix: number[][]) {
  if (matrix.length !== matrix[0].length) {
    throw new Error()
  }
  const len = matrix.length
  const L = [] as number[][]
  const U = [] as number[][]
  for (let i = 0; i < len; i++) {
    L.push([])
    U.push([])
    for (let j = 0; j < len; j++) {
      L[i].push(0)
      U[i].push(0)
    }
  }

  for (let i = 0; i < len; i++) {
    for (let k = i; k < len; k++) {
      let sum = 0
      for (let j = 0; j < i; j++) {
        sum += L[i][j] * U[j][k]
      }
      U[i][k] = matrix[i][k] - sum
    }
    for (let k = i; k < len; k++) {
      if (i === k) {
        L[i][i] = 1
      } else {
        let sum = 0
        for (let j = 0; j < i; j++) {
          sum += L[k][j] * U[j][i]
        }
        L[k][i] = (matrix[k][i] - sum) / U[i][i]
      }
    }
  }

  return {
    Lower: L,
    Upper: U
  }
}
