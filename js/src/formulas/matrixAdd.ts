export default function matrixAdd (matrixA: number[][], matrixB: number[][]) {
  if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
    throw new Error()
  }
  const result = [] as number[][]
  for (let i = 0; i < matrixA.length; i++) {
    result.push([])
    for (let j = 0; j < matrixA[0].length; j++) {
      result[i].push(matrixA[i][j] + matrixA[i][j])
    }
  }
  return result
}
