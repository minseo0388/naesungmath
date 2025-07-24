export default function rootAndCoefficient (a: number, b: number, c: number, type: number) {
  if (type === 1) return -(b / a)
  if (type === 2) return (b / c)
}
