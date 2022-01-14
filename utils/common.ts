export const max = (arr: number[]) =>
  arr.reduce((max, currVal) => (currVal > max ? currVal : max))

export const min = (arr: number[]) =>
  arr.reduce((min, currVal) => (currVal < min ? currVal : min))
