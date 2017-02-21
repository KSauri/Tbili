import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as spot_actions from './actions/spot_actions';
import * as utils from './util/spot_api_util';
import * as search_utils from './util/search_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchSpot = spot_actions.fetchSpot;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
