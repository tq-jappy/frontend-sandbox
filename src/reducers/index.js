import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './counter';
import todo from './todo';
import map from './map';

export default combineReducers({
  counter,
  todo,
  map,
  routing: routerReducer
});