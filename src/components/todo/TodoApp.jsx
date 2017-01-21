import React from 'react'
import Footer from './Footer'
import AddTodo from '../../containers/todo/AddTodo'
import VisibleTodoList from '../../containers/todo/VisibleTodoList'

const TodoApp = () => (
  <div>
    <h2>Todo</h2>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default TodoApp