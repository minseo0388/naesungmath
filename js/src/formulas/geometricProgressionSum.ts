export default function geometricProgressionSum (a: number, r: number, n: number) {
  return a * (1 - (r ** n)) / (1 - r)
}
