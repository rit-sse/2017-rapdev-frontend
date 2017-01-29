import { combineReducers } from 'redux';
import nav from './nav';
import auth from './auth';
import status from './status';
import room from './room';
import reservation from './reservation';

const rootReducer = combineReducers({
  nav,
  auth,
  status,
  room,
  reservation,
});

export default rootReducer;
