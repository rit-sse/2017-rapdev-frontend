import 'whatwg-fetch';
import { api } from './utils';
import { LOADING_STATUS, CLOSE_STATUS } from './status';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export function signIn(username, password) {
  return (dispatch) => {
    dispatch({ type: LOADING_STATUS });
    return fetch('/api/v1/auth', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username, password,
      })
    })
    .then(res => res.json())
    .then(res => {
      // Dumb decode jwt
      const payload = res.token.split('.')[1];
      const decoded = (new Buffer(payload, 'base64')).toString('utf8');
      const user = JSON.parse(decoded);
      return dispatch(api('/api/v1/user/' + user.id))
        .then(fulluser => {
          dispatch({
            type: SIGN_IN,
            token: res.token,
            user: fulluser,
          });
          dispatch({ type: CLOSE_STATUS });
      });
    });
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}
