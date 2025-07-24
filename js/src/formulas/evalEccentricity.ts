export default function evalEccentricity (a: number, b: number) {
  return ((1 - ((b ** 2) / (a ** 2))) ** 0.5)
}
