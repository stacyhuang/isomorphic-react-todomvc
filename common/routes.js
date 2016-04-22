import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import App from './components/App';
import Placeholder from './components/Placeholder';

export default (
  <Route path="/" component={Main} name="app">
    <IndexRoute component={App} />
    <Route path="/placeholder" component={Placeholder} />
  </Route>
)
