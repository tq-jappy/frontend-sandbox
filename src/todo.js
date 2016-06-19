import { createStore } from 'redux'
import todo from './reducers/todo'
import * as actions from './actions/todo'

const initialState = {
  todos: [
    {
      text: 'aaa',
      cmpleted: true
    },
    {
      text: 'bbb',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_ALL'
}

const store = createStore(todo, initialState)
store.subscribe(() => console.log(store.getState()))

store.dispatch(actions.addTodo('ccc'))
store.dispatch(actions.addTodo('ddd'))
store.dispatch(actions.completeTodo(2))
store.dispatch(actions.setVisibilityFilter('SHOW_COMPLETED'))