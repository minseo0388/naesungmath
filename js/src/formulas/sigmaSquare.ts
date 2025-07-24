export default function sigmaSquare (n: number, k: number) {
  return (((1 / 6) * n * (n + 1) * ((2 * n) + 1)) - ((1 / 6) * k * (k + 1) * ((2 * k) + 1)))
}
