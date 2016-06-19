import React from 'react'
import VisibleTodoList from '../../containers/todo/VisibleTodoList'
import AddTodo from '../../containers/todo/AddTodo'

const App = () => (
  <div>
    <h2>Todo</h2>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App