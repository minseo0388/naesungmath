import matrixMultiply from './matrixMultiply'
import QRDecomposition from './QRDecomposition'
import randomVector from './randomVector'
import transpose from './transpose'

export default function EigenVectorDecomposition (mat: number[][], iterationCount = 100) {
  let V = []
  for (let i = 0; i < mat[0].length; i++) {
    V.push(randomVector(mat.length, 1))
  }

  V = transpose(V)

  const X = [] as number[][]

  for (let i = 0; i < mat.length; i++) {
    X.push([])
    for (let j = 0; j < mat[0].length; j++) {
      X[i].push(mat[i][j])
    }
  }

  let QR = QRDecomposition(V)!

  for (let k = 0; k < iterationCount; k++) {
    // eslint-disable-next-line dot-notation
    const W = matrixMultiply(X, QR['Q'])

    QR = QRDecomposition(W)!
  }

  // eslint-disable-next-line dot-notation
  const Q = transpose(QR['Q'])

  for (let i = 0; i < Q.length; i++) {
    let min = Math.abs(Q[i][0])
    for (let j = 0; j < Q[i].length; j++) {
      if (min > Math.abs(Q[i][j])) {
        min = Math.abs(Q[i][j])
      }
    }
    for (let j = 0; j < Q[i].length; j++) {
      Q[i][j] /= min
    }
    if (Q[i][0] < 0) {
      for (let j = 0; j < Q[i].length; j++) {
        Q[i][j] *= -1
      }
    }
  }

  let res = [] as number[]

  for (let i = 0; i < Q.length; i++) {
    const temp = [] as number[][]
    for (let j = 0; j < Q[i].length; j++) {
      temp.push([])
      temp[j].push(Q[i][j])
    }
    const temp2 = matrixMultiply(X, temp)
    for (let j = 0; j < Q[i].length; j++) {
      if (((temp2[j][0] === 0) || isNaN(temp2[j][0])) && !res.includes(0)) {
        res.push(0)
        break
      } else if (Q[i][j] !== 0) {
        res.push(temp2[j][0] / Q[i][j])
        break
      }
    }
  }

  for (let i = 0; i < Q.length; i++) {
    for (let j = 0; j < Q[0].length; j++) {
      if (isNaN(Q[i][j])) {
        Q[i][j] = 0
      }
    }
  }

  res = res.filter((x) => x !== undefined)

  return {
    Q,
    eigenvalue: res
  }
}
