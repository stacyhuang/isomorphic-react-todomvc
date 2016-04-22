require('bootstrap/dist/css/bootstrap.css');
require('./style.css');

import 'babel-polyfill'
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from 'react-router';

import routes from '../common/routes';
import configureStore from '../common/store/configureStore';

// grab the state from a gobal injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

// create Redux store with initial state
const store = configureStore(initialState);

const rootEl = document.getElementById("app");

let renderApp = () => {
  // inline require because we want to import the latest version after update
  const App = require('../common/components/App').default;
  render(
    <Provider store={store}>
      <Router children={routes} history={browserHistory} />
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('../common/components/App', () => {
    renderApp();
  })
}

renderApp();
