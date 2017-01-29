import { combineReducers } from 'redux';
import nav from './nav';
import auth from './auth';
import status from './status';
import room from './room';

const rootReducer = combineReducers({
  nav,
  auth,
  status,
  room,
});

export default rootReducer;
