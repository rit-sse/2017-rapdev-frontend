import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import status from './status';

const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk, status),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;
