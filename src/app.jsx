'use strict';

require('babel-polyfill');

require('bootstrap/dist/css/bootstrap.css')
require('bootstrap/dist/css/bootstrap-theme.css');


// import redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

// import react
import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as ReactDOM from 'react-dom';

import createSagaMiddleware from 'redux-saga';
import { call, put, takeLatest, fork } from 'redux-saga/effects';

import { Router, Route, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer, push } from 'react-router-redux';

import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap'

import Counter from './containers/counter/counter';

import ToDo from './components/todo/App';

import counterState from './reducers/counter';
import todoState from './reducers/todo';

const ACTIONS = {
  NAVIGATE: 'NAVIGATE'
};

const createRouteWorker = (history) => {
  let pushRoute = function* (action) {
    history.push(action.path);
  }
  return function* () {
    yield takeLatest(ACTIONS.NAVIGATE, pushRoute);
  }
}

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counterState,
  todoState,
  routing: routerReducer
});

const store = createStore(
  reducer,
  applyMiddleware(logger, sagaMiddleware)
)

const NoContent = ReactRedux.connect()(() => <div>Nothing to show</div>);

const App = ReactRedux.connect(
  null,
  dispatch => ({
    navigateToPath: (path) => dispatch({ type: ACTIONS.NAVIGATE, path: path })
  })
)(({ navigateToPath, children }) =>
  <div>
    <ButtonGroup>
      <Button bsStyle="success" onClick={() => navigateToPath("/counter")}>Counter</Button>
      <Button bsStyle="success" onClick={() => navigateToPath("/todo")}>ToDo</Button>
    </ButtonGroup>
    {children}
  </div>
);

// =============================

const history = syncHistoryWithStore(createMemoryHistory(), store);

// async action worker
sagaMiddleware.run(function* () {
  yield [
    fork(createRouteWorker(history))
  ]
});

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div className="container">
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="/counter" component={Counter} />
          <Route path="/todo" component={ToDo} />
          <Route path="/misc" component={Counter} />
          <Route path="*" component={NoContent} />
        </Route>
      </Router>
      <br />
    </div>
  </ReactRedux.Provider>,
  document.getElementById('container')
)