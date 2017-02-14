import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as sesh_actions from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  window.login = sesh_actions.login;
  //TODO window.currentUser => preloadedState
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
