import React from 'react'
import { TextField, RaisedButton } from 'material-ui'
import { addTodo } from '../../actions/todo'

const KEY_ENTER = 13;

const AddTodoForm = ({ onSubmit }) => {
  let input, text;

  const onChange = (e) => {
    input = e.target;
    text = e.target.value;
  }

  const submit = (e) => {
    e.preventDefault();
    onSubmit(text);
    if (input) { input.value = ''; }
    return;
  }

  return (
    <div>
      <form onSubmit={submit}>
        <TextField
          hintText="Todo"
          floatingLabelText="What Task?"
          onChange={onChange} />
        <RaisedButton label="Add Todo" primary={true} type="submit" />
      </form>
    </div>
  )
}

export default AddTodoForm