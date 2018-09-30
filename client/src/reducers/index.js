import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import project from './project';

const rootReducer = combineReducers({
  user,
  flash,
  project
});

export default rootReducer;
