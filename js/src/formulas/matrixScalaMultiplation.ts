export default function matrixScalaMultiplation (matrix: number[][], k: number) {
  const res = [] as number[][]
  for (let i = 0; i < matrix.length; i++) {
    res.push([])
    for (let j = 0; j < matrix[0].length; j++) {
      res[i].push(matrix[i][j] * k)
    }
  }

  return res
}
