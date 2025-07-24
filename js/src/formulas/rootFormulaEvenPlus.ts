export default function rootFormulaEvenPlus (a: number, b: number, c: number) {
  return ((-(0.5 * b) + ((((0.5 * b) ** 2) - (a * c)) ** 0.5)) / a)
}
