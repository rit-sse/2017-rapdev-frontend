import { combineReducers } from 'redux';
import auth from './auth';
import status from './status';
import room from './room';
import reservation from './reservation';
import feature from './feature';
import reservations from './reservations';
const rootReducer = combineReducers({
  auth,
  status,
  room,
  reservation,
  feature,
  reservations
});

export default rootReducer;
