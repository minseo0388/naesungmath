export default function determinant (matrix: number[][]): number {
  if (matrix.length !== matrix[0].length) {
    throw new Error()
  }
  if (matrix.length > 2) {
    let result = 0
    for (let i = 0; i < matrix[0].length; i++) {
      const K = matrix[0][i]
      const mat = [] as number[][]
      for (let j = 1; j < matrix.length; j++) {
        mat.push([])
        for (let k = 0; k < matrix[0].length; k++) {
          if (k !== i) {
            mat[j - 1].push(matrix[j][k])
          }
        }
      }
      if (i % 2 === 0) {
        result += K * determinant(mat)
      } else {
        result -= K * determinant(mat)
      }
    }
    return result
  } else {
    return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0]
  }
}
