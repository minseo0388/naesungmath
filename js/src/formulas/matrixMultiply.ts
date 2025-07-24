export default function matrixMultiply (matrixA: number[][], matrixB: number[][]) {
  if (matrixA[0].length !== matrixB.length) {
    throw new Error()
  }
  const result = [] as number[][]
  for (let i = 0; i < matrixA.length; i++) {
    result.push([])
    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = 0
      for (let k = 0; k < matrixB.length; k++) {
        if (!isNaN(matrixA[i][k]) && !isNaN(matrixB[k][j])) {
          sum += matrixA[i][k] * matrixB[k][j]
        }
      }
      result[i].push(sum)
    }
  }

  return result
}
