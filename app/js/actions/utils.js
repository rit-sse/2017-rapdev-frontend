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
    const token = '<token>'; // TODO store fetch
    const headers = Object.assign({}, {
      'Authorization': 'bearer ' + token
    }, options.headers);
    options.headers = headers;
    // TODO error check
    return fetch(url, options)
      .then(res => res.json());
  };
};
