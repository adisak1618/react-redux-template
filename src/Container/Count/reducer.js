export const counter = (state = 0, {type, number = 1}) => {
  switch (type) {
    case 'INCREMENT':
      return state + number
    case 'DECREMENT':
      return state - number
    default:
      return state
  }
}
