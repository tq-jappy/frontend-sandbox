export default function todos(state = [], action) {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: state.length + 1, text: action.text, completed: false }
      ]
    case 'COMPLETE_TODO':
      return state
    default:
      return state
  }
}