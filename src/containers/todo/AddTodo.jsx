import { connect } from 'react-redux'
import AddTodoForm from '../../components/todo/AddTodoForm';
import { addTodo } from '../../actions/todo'

export default connect(
  null,
  dispatch => ({
    onSubmit: (text) => dispatch(addTodo(text))
  })
)(AddTodoForm)