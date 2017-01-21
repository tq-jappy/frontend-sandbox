import React from 'react'
import { addTodo } from '../../actions/todo'
import { Form, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap'

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
      <Form onSubmit={submit} inline>
        <FormGroup controlId="formInlineTask">
          <ControlLabel>Task</ControlLabel>
          {''}
          <FormControl type="text" onChange={onChange} />
        </FormGroup>
        {''}
        <Button type="submit">
          <Glyphicon glyph="plus" />
          {''}
          Add Todo
        </Button>
      </Form>
    </div>
  )
}

export default AddTodoForm