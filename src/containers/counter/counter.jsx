import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions/counter'

let App = ({counter, dispatch}) => (
  <div>
    <h1>Counter</h1>
    <div>{counter}</div>
    <button onClick={() => dispatch(actions.incrementCounter())}>+</button>
    <button onClick={() => dispatch(actions.decrementCounter())}>-</button>
  </div>
)

// ReactとReduxの接続
function mapStateToProps(state) {
  return { counter: state.counter }
}
App = connect(mapStateToProps)(App)

export default App