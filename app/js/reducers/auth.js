import { SIGN_IN, SIGN_OUT, SIGN_IN_UPDATE_USER } from '../actions/auth';
import { AUTH_TOKEN_KEY } from '../store/auth';

export default function auth(state = { loggedIn: false }, action) {
  // Init
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  if (token !== null && state.token === undefined) {
    return {
      ...state,
      loggedIn: true,
      token,
    };
  }
  // Normal flow
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        token: action.token,
        loggedIn: true,
      };
    case SIGN_IN_UPDATE_USER:
      return {
        ...state,
        user: action.user,
      };
    case SIGN_OUT:
      return {
        ...state,
        loggedIn: false,
      };
    default:
      return state;
  }
}
