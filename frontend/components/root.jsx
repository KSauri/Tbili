import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import LogInContainer from './auth_forms/log_in_container';
import SignUpContainer from './auth_forms/sign_up_container';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/login"
            component={ LogInContainer }
            />
          <Route path="/signup"
            component={ SignUpContainer }
            />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
