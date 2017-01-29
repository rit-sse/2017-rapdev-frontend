import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import status from './status';
import auth from './auth';

const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk, status),
      applyMiddleware(thunk, auth),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;
