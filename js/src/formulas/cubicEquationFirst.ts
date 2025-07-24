export default function cubicEquationFirst (a: number, b: number, c: number, d: number) {
  const x = (((0.5 * ((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) + (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4 * ((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  const y = (((0.5 * ((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d) - (((2 * (b ** 3) - (9 * a * b * c) + (27 * (a ** 2) * d)) ** 2) - 4 * ((b ** 2) - 3 * a * c) ** 3) ** 0.5))) ** (1 / 3)))
  return -(b / (3 * a)) - ((1 / (3 * a)) * x) - ((1 / (3 * a)) * y)
}
