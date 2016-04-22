import path from 'path';
import Express from 'express';

import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, match } from 'react-router';

import configureStore from '../common/store/configureStore';
import routes from '../common/routes';

const app = Express();
const port = 3000;

// add middleware to express server
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  const initialState = {};
  // create a new Redux store instance
  const store = configureStore(initialState);

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    }

    if (!renderProps) {
      return res.status(404).send('Not found');
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    const InitialComponent = (
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    )

    // render the component to a string
    const html = renderToString(InitialComponent);

    // grab the initial state from our Redux store
    const finalState = store.getState();

    // send the rendered page back to the client
    res.status(200).send(renderFullPage(html, finalState));
  })
}

function renderFullPage(html, initialState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>TodoMVC</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
  `
}

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}.`);
  }
});
