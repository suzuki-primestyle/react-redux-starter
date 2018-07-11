import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { logger } from 'redux-logger';

import appHistory from './appHistory';
import rootReducer from './rootReducer';
import AppRouter from './AppRouter';

const store = createStore(
  connectRouter(appHistory)(rootReducer),
  applyMiddleware(thunk, routerMiddleware(appHistory), logger),
);

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.querySelector('#app')
);
