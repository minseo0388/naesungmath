export default function eulerPolyhedronTheorem (v: number, e: number, f: number) {
  if ((v - e + f) === 2) return true
  if ((v - e + f) !== 2) return false
}
