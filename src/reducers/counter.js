export default function counter(state = {counter: 0}, action) {
  switch(action.type) {
    case 'INCREMENT_COUNTER':
      return { counter: state.counter + 1 }
    case 'DECREMENT_COUNTER':
      return { counter: state.counter - 1 }
    default:
      return state
  }
}