import QRDecomposition from './QRDecomposition'
import transpose from './transpose'

export default function LQDecomposition (mat: number[][]) {
  const AT = transpose(mat)

  const AT2 = QRDecomposition(AT)!

  return {
    // eslint-disable-next-line dot-notation
    L: transpose(AT2['R']),
    // eslint-disable-next-line dot-notation
    Q: transpose(AT2['Q'])
  }
}
