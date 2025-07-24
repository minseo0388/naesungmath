export default function circumscribedCircleTriangleAreaAngle (a: number, b: number, c: number, r: number) {
  return (2 * r * r * (Math.sin(a)) * (Math.sin(b)) * (Math.sin(c)))
}
