export default function infiniteSeries3 (x: number) {
  if (x > 1 || x < -1 || x === 1 || x === -1) {
    console.log('Check |x| < 1')
  } else {
    return (1 / (1 - x))
  }
}
