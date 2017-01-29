import { SIGN_IN, SIGN_OUT } from '../actions/auth';

export const AUTH_TOKEN_KEY = 'authtoken';

export default store => next => action => { // eslint-disable-line
  if (action.type === SIGN_IN && action.token !== undefined) {
      localStorage.setItem(AUTH_TOKEN_KEY, action.token);
  }
  if (action.tpye === SIGN_OUT) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
  }
  return next(action);
};
