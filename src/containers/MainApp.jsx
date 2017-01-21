import React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'
import { navigateToPath } from '../actions/navigate'

export default connect(
  null,
  dispatch => ({
    onMenuClick: (path) => dispatch(navigateToPath(path))
  })
)(({ onMenuClick, children }) =>
  <div>
    <ButtonGroup>
      <Button bsStyle="success" onClick={() => onMenuClick("/counter")}>Counter</Button>
      <Button bsStyle="success" onClick={() => onMenuClick("/todo")}>ToDo</Button>
    </ButtonGroup>
    {children}
  </div>
);