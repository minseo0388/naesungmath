export default function circularSectorAreart (r: number, t: number, l: number) {
  if (r != null) {
    if (t != null || l != null) {
      if (t != null) return (0.5 * r * (t ** 2))
      else return (0.5 * r * l)
    }
  }
}
