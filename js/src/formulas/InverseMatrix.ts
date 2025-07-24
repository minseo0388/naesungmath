import determinant from './determinant'
import gaussian from './gaussian'
import IdentityMatrix from './IdentityMatrix'

export default function InverseMatrix (A: number[][]) {
  if (determinant(A) === 0) {
    return null
  }
  let mat = [] as number[][]
  const I = IdentityMatrix(A.length)
  for (let i = 0; i < A.length; i++) {
    mat.push([])
    for (let j = 0; j < A[i].length; j++) {
      mat[i].push(A[i][j])
    }
    for (let j = 0; j < I[i].length; j++) {
      mat[i].push(I[i][j])
    }
  }

  mat = gaussian(mat, A.length, A[0].length)

  const res = [] as number[][]

  for (let i = 0; i < A.length; i++) {
    res.push([])
    for (let j = A[i].length; j < mat[i].length; j++) {
      res[i].push(mat[i][j])
    }
  }

  return res
}
