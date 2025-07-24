export default function isinrange (a: number, b: number) {
  const g = function (x: number) {
    if (a <= x && x <= b) {
      return true
    } else {
      return false
    }
  }
  return g
}
