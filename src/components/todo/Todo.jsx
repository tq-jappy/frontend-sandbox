import React, { PropTypes } from 'react'
import { ListItem, Divider } from 'material-ui'

const Todo = ({ onClick, completed, text }) => (
  <div>
    <ListItem
      onClick={onClick}
      style={{
        textDecoration: completed? 'line-through' : 'none'
      }}
      primaryText={text}
    />
    <Divider />
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo