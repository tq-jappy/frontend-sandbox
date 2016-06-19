import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import todo from './reducers/todo'
import * as actions from './actions/todo'
import App from './components/todo/App'

const initialState = {
  todos: [
    {
      id: 1,
      text: 'aaa',
      cmpleted: true
    },
    {
      id: 2,
      text: 'bbb',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_ALL'
}
const store = createStore(todo, initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
)