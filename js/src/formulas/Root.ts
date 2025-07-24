export default class Root {
  private data = [] as number[]

  constructor () {
    for (let i = 2; i <= 10; i++) {
      this.data[i] = this.get(i, 10)
    }
  }

  get (val: number, digit_: number) {
    const digit = digit_ || 10
    return parseFloat((val ** 0.5).toFixed(digit))
  }
}
