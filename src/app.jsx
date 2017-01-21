'use strict';

require('babel-polyfill');

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

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/MainApp';
import Counter from './containers/counter/CounterApp';
import Todo from './components/todo/TodoApp';
import NoContent from './components/NoContent';

import reducers from './reducers';

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

const getInitialState = () => ({
  counter: {
    counter: 12
  },
  todo: {
    todos: [
      { id: 0, text: '0-aaa', completed: false },
      { id: 1, text: '1-aaa', completed: true }
    ],
    visibilityFilter: 'SHOW_ACTIVE'
  }
});

const store = createStore(
  reducers,
  getInitialState(),
  applyMiddleware(logger, sagaMiddleware),
)

const history = syncHistoryWithStore(createMemoryHistory(), store);

injectTapEventPlugin();

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
          <Route path="/todo" component={Todo} />
          <Route path="/misc" component={Counter} />
          <Route path="*" component={NoContent} />
        </Route>
      </Router>
      <br />
    </div>
  </ReactRedux.Provider>,
  document.getElementById('container')
)