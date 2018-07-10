import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Switch, Route } from 'react-router-dom';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { logger } from 'redux-logger';

import appHistory from './appHistory';
import rootReducer from './rootReducer';
// import AppRouter from './AppRouter';

const store = createStore(
  connectRouter(appHistory)(rootReducer),
  applyMiddleware(thunk, routerMiddleware(appHistory), logger),
);

const App = () => <div>App</div>;
const Login = () => <div>Login</div>;
const SignUp = () => <div>Signup</div>;

render(
  <Provider store={store}>
    <ConnectedRouter history={appHistory}>
      <Switch>
        <Route exact path="/app/" component={App} />
        <Route path="/app/auth/login" component={Login} />
        <Route path="/app/auth/signup" component={SignUp} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.querySelector('#app')
);
