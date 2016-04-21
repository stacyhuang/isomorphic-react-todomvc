import { combineReducers } from 'redux';
import todos from './todos';
import displayFilter from './displayFilter';

const todoApp = combineReducers({
  todos,
  displayFilter
});

export default todoApp;
