export default function polyarea (n: number, a: number) {
  return n * (a ** 2) / (4 * (Math.tan(a / (Math.PI))))
}
