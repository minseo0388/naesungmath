export default function coneArea (r: number, h: number) {
  return (((Math.PI) * r * (((r ** 2) + (h ** 2)) ** 0.5)) + ((Math.PI) * (r ** 2)))
}
