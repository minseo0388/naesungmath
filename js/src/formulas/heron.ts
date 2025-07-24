export default function heron (a: number, b: number, c: number) {
  const cosTheta = ((a * a) + (b * b) - (c * c)) / (2 * a * b)
  const sinTheta = Math.sqrt(1 - (cosTheta ** 2))
  return (a * b * sinTheta) / 2
}
