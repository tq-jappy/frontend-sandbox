import React from 'react'
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import * as actions from '../../actions/counter'

const Counter = ({counter, increment, decrement}) => (
  <div>
    <h1>Counter</h1>
    <div>{counter}</div>
    <FloatingActionButton onClick={increment}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton onClick={decrement}>
      <ContentRemove />
    </FloatingActionButton>
  </div>
)

export default Counter