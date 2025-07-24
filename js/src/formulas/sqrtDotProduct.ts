export default function sqrtDotProduct (row1: number[], row2: number[]) {
  let res = 0
  for (let i = 0; i < row1.length; i++) {
    res += row1[i] * row2[i]
  }

  return res ** 0.5
}
