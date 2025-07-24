import matrixMultiply from './matrixMultiply'
import transpose from './transpose'

export default function outterProductmatrix (u: number[][], v: number[][]) {
  return matrixMultiply(u, transpose(v))
}
