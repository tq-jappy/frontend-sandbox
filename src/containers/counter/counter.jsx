import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from 'react-bootstrap'
import * as actions from '../../actions/counter'

let App = ({counter, dispatch}) => (
  <div>
    <h1>Counter</h1>
    <div>{counter}</div>
    <ButtonGroup>
    <Button bsStyle="success" onClick={() => dispatch(actions.incrementCounter())}>+</Button>
    <Button bsStyle="success" onClick={() => dispatch(actions.decrementCounter())}>-</Button>
    </ButtonGroup>
  </div>
)

// ReactとReduxの接続
function mapStateToProps(state) {
  return { counter: state.counter }
}
App = connect(mapStateToProps)(App)

export default App