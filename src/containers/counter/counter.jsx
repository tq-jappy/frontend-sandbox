import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import * as actions from '../../actions/counter'

let App = ({counter, dispatch}) => (
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

// ReactとReduxの接続
const mapStateToProps = (state) => {
  return { counter: state.counter }
}
App = connect(mapStateToProps)(App)

export default App