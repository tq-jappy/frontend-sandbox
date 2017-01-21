import { connect } from 'react-redux'
import TodoList from '../../components/todo/TodoList'
import * as actions from '../../actions/todo'

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todoState.todos, state.todoState.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(actions.toggleTodo(id))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);