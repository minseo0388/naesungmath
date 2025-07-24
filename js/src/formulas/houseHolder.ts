import IdentityMatrix from './IdentityMatrix'
import matrixMultiply from './matrixMultiply'
import matrixScalaMultiplation from './matrixScalaMultiplation'
import MatrixSub from './MatrixSub'
import transpose from './transpose'

export default function houseHolder (mat: number[][]) {
  function SG (N: number) {
    if (N < 0) {
      return -1
    } else {
      return 1
    }
  }
  let K = 1
  let B = [] as number[][]
  for (let i = 0; i < mat.length; i++) {
    B.push([])
    for (let j = 0; j < mat[0].length; j++) {
      B[i].push(mat[i][j])
    }
  }

  while (1) {
    // eslint-disable-next-line no-inner-declarations
    function s (k: number) {
      let res = 0
      for (let i = k + 1; i < B.length; i++) {
        res += B[i][k] ** 2
      }

      return res ** 0.5
    }
    const S = s(K - 1)
    if (S === 0) {
      K += 1
      continue
    }
    const z = 1 / 2 * (1 + SG(B[K][K - 1]) * B[K][K - 1] / S)

    let v = []

    for (let i = 0; i < K; i++) {
      v.push(0)
    }
    v.push(z ** 0.5)
    for (let i = K + 1; i < mat.length; i++) {
      v.push(SG(B[K][K - 1]) * B[K - 1][i] / (2 * v[K] * S))
    }

    v = transpose([v])

    const vv = matrixMultiply(v, transpose(v))

    const H = MatrixSub(IdentityMatrix(mat.length), matrixScalaMultiplation(vv, 2))

    const A = matrixMultiply(matrixMultiply(H, B), H)

    if (K >= B.length - 2) {
      return A
    } else {
      K += 1
      B = A
    }
  }
}
