import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Match, BrowserRouter, Redirect } from 'react-router';
import store from './store';
import Layout from './containers/Layout';
import asyncComponent from './components/asyncComponent';

import 'scss/global.scss';

if (module.hot) module.hot.accept();

import { checkForUser } from './actions/auth';
store.dispatch(checkForUser());

const Teams = asyncComponent(() => System.import('./pages/Teams'));
const Overview = asyncComponent(() => System.import('./pages/Overview'));
const Reservations = asyncComponent(() => System.import('./pages/Reservations'));

window.onload = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Match pattern="/" exactly render={() => (<Redirect to="/overview" />)} />
          <Match exactly pattern="/overview" component={Overview} />
          <Match pattern="/myTeams" component={Teams} />
          <Match exactly pattern="/reservation" component={Reservations} />
        </Layout>
      </BrowserRouter>
    </Provider>,
    document.getElementById('react')
  );
};
