export default function trace (matrix: number[][]) {
  let res = 0
  for (let i = 0; i < matrix.length; i++) {
    res += matrix[i][i]
  }
  return res
}
