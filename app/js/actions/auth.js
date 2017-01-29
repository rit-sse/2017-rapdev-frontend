import 'whatwg-fetch';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export function signIn(username, password) {
  return (dispatch) => {
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
      dispatch({
        type: SIGN_IN,
        token: res.token,
      });
    });
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}
