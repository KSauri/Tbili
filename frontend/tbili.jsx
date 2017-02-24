import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as booking_actions from './actions/booking_actions';
import * as utils from './util/booking_api_util';
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
  window.deleteBooking = booking_actions.deleteBooking;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
