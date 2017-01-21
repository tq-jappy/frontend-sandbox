import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => {
  if (todos.length === 0) {
    return <p>Empty</p>
  }

  return <div>
    <h2>ToDo List</h2>
    <ul>
    {
      todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )
    }
    </ul>
  </div>
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList