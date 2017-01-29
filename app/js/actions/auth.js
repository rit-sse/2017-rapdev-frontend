import 'whatwg-fetch';
import { api } from './utils';
import { LOADING_STATUS, CLOSE_STATUS } from './status';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_IN_UPDATE_USER = 'SIGN_IN_UPDATE_USER';

function updateUser(id) {
  return (dispatch) => {
    dispatch(api('/api/v1/user/' + id))
      .then(user => {
        dispatch({
          type: SIGN_IN_UPDATE_USER,
          user,
        });
        dispatch({ type: CLOSE_STATUS });
    });
  };
}

function getUserIDFromToken(token) {
  const payload = token.split('.')[1];
  const decoded = (new Buffer(payload, 'base64')).toString('utf8');
  const user = JSON.parse(decoded);
  return user.id;
}

function updateWithToken(token) {
  return (dispatch) => {
    const id = getUserIDFromToken(token);
    dispatch({
      type: SIGN_IN,
      token,
    });
    return dispatch(updateUser(id));
  };
}

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
      return dispatch(updateWithToken(res.token));
    });
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function checkForUser() {
  return (dispatch, getState) => {
    dispatch({ type: LOADING_STATUS });
    if (getState().auth.user === undefined && getState().auth.token !== undefined) {
      return dispatch(updateWithToken(getState().auth.token));
    }
  };
}