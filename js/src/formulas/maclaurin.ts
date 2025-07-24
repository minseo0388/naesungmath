import taylor from './taylor'

export default function maclaurin (f: (x: number) => number, count: number) {
  return taylor(f, 0, count)
}
