import LQDecomposition from './LQDecomposition'
import QRDecomposition from './QRDecomposition'

export default function SingularValueDecomposition (mat: number[][], iterationCount = 2) {
  let M = mat
  let VT = [] as number[][]
  let Sigma = [] as number[][]
  let Q = [] as number[][]
  for (let i = 0; i < iterationCount; i++) {
    const QR = QRDecomposition(M)!
    console.log('QR', QR)
    Q = QR.Q
    const LPV = LQDecomposition(QR.R)
    VT = LPV.Q
    console.log(LPV)
    Sigma = LPV.L
    M = Sigma
  }
  for (let i = 0; i < Sigma.length; i++) {
    M[i][i] = M[i][i] ** 0.5
  }
  return { U: Q, VT, Sigma }
}
