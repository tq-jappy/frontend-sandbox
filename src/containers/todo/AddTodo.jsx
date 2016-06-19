import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todo'
import { Form, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap'

let AddTodo = ({dispatch}) => {
  let input, text

  const onChange = (e) => {
    input = e.target
    text = e.target.value
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(input.value))
    input.value = ''
  }

  return (
    <div>
      <Form onSubmit={onSubmit} inline>
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

AddTodo = connect()(AddTodo)
export default AddTodo