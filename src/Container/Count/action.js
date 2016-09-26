export const Increse = (number) => {
  return {
    type: 'INCREMENT',
    number: number
  }
}

export const decrese = (number) => {
  return {
    type: 'DECREMENT',
    number: number
  }
}
