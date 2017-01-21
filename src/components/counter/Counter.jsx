import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import * as actions from '../../actions/counter'

const Counter = ({counter, increment, decrement}) => (
  <div>
    <h1>Counter</h1>
    <div>{counter}</div>
    <ButtonGroup>
      <Button bsStyle="success" onClick={increment}>
        <Glyphicon glyph="plus" />
      </Button>
      <Button bsStyle="success" onClick={decrement}>
        <Glyphicon glyph="minus" />
      </Button>
    </ButtonGroup>
  </div>
)

export default Counter