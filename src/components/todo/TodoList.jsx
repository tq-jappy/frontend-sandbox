import React, { PropTypes } from 'react'
import Todo from './Todo'
import { List, Subheader } from 'material-ui';

const TodoList = ({ todos, onTodoClick }) => {
  if (todos.length === 0) {
    return <p>Empty</p>
  }

  return <div>
    <List>
      <Subheader>ToDo List</Subheader>
      {
        todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
          />
        )
      }
    </List>
  </div>
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList