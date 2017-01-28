import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Match, BrowserRouter } from 'react-router';
import store from './store';
import Layout from './containers/Layout';
import asyncComponent from './components/asyncComponent';

if (module.hot) module.hot.accept();

const Overview = asyncComponent(() => System.import('./pages/Overview'));

window.onload = () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Match exactly pattern="/" component={Overview} />
        </Layout>
      </BrowserRouter>
    </Provider>,
    document.getElementById('react'),
  );
};
