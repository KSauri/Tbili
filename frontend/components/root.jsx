import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';


const Root = ({ store }) => {
  function isLoggedIn() {
    return !!store.getState().session.currentUser;
  }
  function redirectIfLoggedIn(nextState, replace) {
    if (isLoggedIn()) {
      replace('/');
    }
  }
  function redirectUnlessLoggedIn(nextState, replace) {
    if (!isLoggedIn()) {
      replace('/login');
    }
  }
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
