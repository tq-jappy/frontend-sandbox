import { createStore } from 'redux'
import * as actions from './actions/counter'
import counter from './reducers/counter'

const store = createStore(counter)
store.subscribe(() => console.log(store.getState()))

// Action を発行
store.dispatch(actions.incrementCounter())
store.dispatch(actions.incrementCounter())
store.dispatch(actions.decrementCounter())