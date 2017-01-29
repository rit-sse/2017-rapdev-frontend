import { SIGN_IN, SIGN_OUT } from '../actions/auth';

export default function auth(state = { loggedIn: false }, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        loggedIn: true,
        token: action.token,
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
