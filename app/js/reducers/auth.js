import { SIGN_IN, SIGN_OUT } from '../actions/auth';

export default function auth(state = true, action) {
  switch (action.type) {
    case SIGN_IN:
      return true;
    case SIGN_OUT:
      return false;
    default:
      return state;
  }
}
