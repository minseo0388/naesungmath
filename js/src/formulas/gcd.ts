export default function gcd (a: number, b: number): number {
  if (b === 0) {
    return a
  } else {
    return gcd(b, a % b)
  }
}
