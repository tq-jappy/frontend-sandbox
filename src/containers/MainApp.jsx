import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, IconButton, IconMenu, MenuItem } from 'material-ui'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { navigateToPath } from '../actions/navigate'

export default connect(
  null,
  dispatch => ({
    onMenuClick: (path) => dispatch(navigateToPath(path))
  })
)(({ onMenuClick, children }) =>
  <MuiThemeProvider>
    <div>
      <header className="header">
        <AppBar title="React App"
          titleStyle={{textAlign: "center"}}
          // showMenuIconButton={false}
          iconElementLeft={
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
          >
            <MenuItem onClick={() => onMenuClick("/counter")}>Counter</MenuItem>
            <MenuItem onClick={() => onMenuClick("/todo")}>ToDo</MenuItem>
          </IconMenu>
        }/>
      </header>
      {children}
    </div>
  </MuiThemeProvider>
);