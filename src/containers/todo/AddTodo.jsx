import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/todo'
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

let AddTodo = ({dispatch}) => {
  let input

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
          <input ref={node => {input = node}}/>
        </FormGroup>
        {''}
        <Button type="submit">
          Add Todo
        </Button>
      </Form>
    </div>
  )
}

AddTodo = connect()(AddTodo)
export default AddTodo