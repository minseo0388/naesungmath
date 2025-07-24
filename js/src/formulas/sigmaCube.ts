export default function sigmaCube (n: number, k: number) {
  return (((1 / 4) * (n ** 2) * ((n + 1) ** 2)) - ((1 / 4) * (k ** 2) * ((k + 1) ** 2)))
}
