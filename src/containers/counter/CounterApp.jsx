import React from 'react'
import { connect } from 'react-redux'
import Counter from '../../components/counter/Counter'
import * as actions from '../../actions/counter'

export default connect(
  state => ({
    counter: state.counter.counter
  }),
  dispatch => ({
    increment: () => dispatch(actions.incrementCounter()),
    decrement: () => dispatch(actions.decrementCounter())
  })
)(Counter);