import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import appHistory from './appHistory';

import RedirectToLogin from './routing/RedirectToLogin';
import RedirectToHome from './routing/RedirectToHome';
import NotFound from './routing/NotFound';

import Hello from './initialization/Hello';
import Login from './login/Login';
import Header from './header/Header';

const Home = () => <div>Home</div>;
const SignUp = () => <div>Signup</div>;

class AppRouter extends Component {
  render() {
    const { saidHello } = this.props.initialization;
    const { isAuthenticated } = this.props.auth;

    // run some initialization processes.
    // I don't recomend to run multiple processes at same time.
    // update status and load specific component in step by step.
    if (!saidHello) { // ask API if a user has login-session or not
      return <Hello />;
    }
    /*
    if (!someStatus) {
      return <Something />
    }
    */

    // show login/signup form if user is not authenticated.
    if (!isAuthenticated) {
      return (
        <ConnectedRouter history={appHistory}>
          <Switch>
            <Route path="/app/auth/login" component={Login} />
            <Route path="/app/auth/signup" component={SignUp} />
            <Route component={RedirectToLogin} />
          </Switch>
        </ConnectedRouter>
      );
    }

    // main contents
    return (
      <ConnectedRouter history={appHistory}>
        <div>
          <Header />
          <Switch>
            { /* redirect to home after login */ }
            <Route path="/app/auth/login" component={RedirectToHome} />
            <Route path="/app/auth/signup" component={RedirectToHome} />
            { /* Main content */ }
            <Route exact path="/app/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    )
  }
}

const mapStateToProps = ({initialization, auth}) => {
  return {
    initialization,
    auth,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
