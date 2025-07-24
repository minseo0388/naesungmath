export default function random (a: number, b: number) {
  const ranNum = Math.floor((Math.random() * b) + a)
  return ranNum
}
