import 'whatwg-fetch';

export const createAction = nameSpace => (type, payload) => {
  return {
    type,
    payload,
    error: (payload instanceof Error),
    meta: {
      nameSpace,
    },
  };
};

export const createLoading = nameSpace => (type) => {
  return {
    type,
    meta: {
      nameSpace,
      loading: true,
    },
  };
};

export const api = (url, options = {}) => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    const headers = Object.assign({}, {
      'Authorization': 'Bearer ' + token,
      'content-type': 'application/json',
    }, options.headers);
    options.headers = headers;
    // TODO error check
    return fetch(url, options)
      .then(res => {
        if ([200].indexOf(res.status) > -1) {
          return res.json();
        } else {
          return {};
        }
      });
  };
};
