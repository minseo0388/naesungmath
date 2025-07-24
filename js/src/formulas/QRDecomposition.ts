import matrixScalaMultiplation from './matrixScalaMultiplation'
import MatrixSub from './MatrixSub'
import transpose from './transpose'

export default function QRDecomposition (mat: number[][]) {
  function sqrtDotProduct (row1: number[], row2: number[]) {
    let res = 0
    for (let i = 0; i < row1.length; i++) {
      res += row1[i] * row2[i]
    }

    return res ** 0.5
  }

  function dotProduct (row1: number[], row2: number[]) {
    let res = 0
    for (let i = 0; i < row1.length; i++) {
      res += row1[i] * row2[i]
    }

    return res
  }

  function normalizeMemoi (row: number[][], K: number) {
    return matrixScalaMultiplation(row, 1 / K)
  }

  const X = transpose(mat)

  const r = [] as number[][]
  for (let i = 0; i < X.length; i++) {
    r.push([])
    for (let j = 0; j < X[0].length; j++) {
      r[i].push(0)
    }
  }
  const Q = [] as number[][]
  for (let i = 0; i < X.length; i++) {
    Q.push([0])
  }

  let k = 0

  while (1) {
    r[k][k] = sqrtDotProduct(X[k], X[k])

    Q[k] = normalizeMemoi([X[k]], r[k][k])[0]

    for (let j = k + 1; j < X.length; j++) {
      r[k][j] = dotProduct(Q[k], X[j])
    }

    for (let j = k + 1; j < X.length; j++) {
      X[j] = MatrixSub([X[j]], matrixScalaMultiplation([Q[k]], r[k][j]))[0]
    }

    k += 1

    if (k === X.length) {
      return {
        Q: transpose(Q),
        R: r
      }
    }
  }
}
