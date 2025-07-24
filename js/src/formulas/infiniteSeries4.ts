export default function infiniteSeries4 (x: number) {
  if (x > 1 || x < -1 || x === 1 || x === -1) {
    console.log('Check |x| < 1')
  } else {
    return (x / ((1 - x) ** 2))
  }
}
