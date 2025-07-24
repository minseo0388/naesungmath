export default function transpose (mat: number[][]) {
  const res = [] as number[][]

  for (let i = 0; i < mat[0].length; i++) {
    res.push([])
    for (let j = 0; j < mat.length; j++) {
      res[i].push(mat[j][i])
    }
  }

  return res
}
