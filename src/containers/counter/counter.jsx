import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import * as actions from '../../actions/counter'

const Counter = ({counter, dispatch}) => (
  <div>
    <h1>Counter</h1>
    <div>{counter}</div>
    <ButtonGroup>
      <Button bsStyle="success" onClick={() => dispatch(actions.incrementCounter())}>
        <Glyphicon glyph="plus" />
      </Button>
      <Button bsStyle="success" onClick={() => dispatch(actions.decrementCounter())}>
        <Glyphicon glyph="minus" />
      </Button>
    </ButtonGroup>
  </div>
)

export default connect(
  state => ({
    counter: state.counterState.counter
  })
)(Counter);