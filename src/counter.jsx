import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import * as actions from './actions/counter'
import counter from './reducers/counter'
import App from './containers/counter/counter'

const store = createStore(counter, { counter: 0 })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container2')
)