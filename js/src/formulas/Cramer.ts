import determinant from './determinant'

export default function Cramer (mat: number[][]) {
  const B = []
  const X = []

  for (let i = 0; i < mat.length; i++) {
    B.push(mat[i][mat[0].length - 1])
  }

  const T = [] as number[][]

  for (let j = 0; j < mat.length; j++) {
    T.push([])
    for (let k = 0; k < mat[0].length - 1; k++) {
      T[j].push(mat[j][k])
    }
  }

  for (let i = 0; i < mat.length; i++) {
    const Ai = [] as number[][]
    for (let j = 0; j < mat.length; j++) {
      Ai.push([])
      for (let k = 0; k < mat[0].length - 1; k++) {
        Ai[j].push(mat[j][k])
      }
    }

    for (let j = 0; j < mat.length; j++) {
      Ai[j][i] = B[j]
    }

    X.push(determinant(Ai) / determinant(T))
  }

  return X
}
