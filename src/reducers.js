


export default function reducer(state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state +1
    case 'decrement':
      return state - 1
    case 'increment-async':
      return state
    default:
       return state
  }
}