import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as spot_actions from './actions/spot_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchFeatured = spot_actions.fetchFeaturedSpots;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
