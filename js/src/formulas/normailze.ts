import matrixScalaMultiplation from './matrixScalaMultiplation'
import sqrtDotProduct from './sqrtDotProduct'

export default function normailze (row: number[]) {
  return matrixScalaMultiplation([row], 1 / sqrtDotProduct(row, row))
}
