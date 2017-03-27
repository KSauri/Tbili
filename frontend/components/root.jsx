import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SpotShowContainer from './spot_show/spot_show_container';
import SearchResultsContainer from './search_results/search_results_container';
import ParentFormContainer from './spot_creation/parent_form_container';
import TripsShowContainer from './trips_show_page/trips_show_container';
import HostedSpotsContainer from './hosted_spots/hosted_spots_container';
import NotFound from './not_found/not_found';
import Home from './home_page/home_page';
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
      <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={ Home } />
          <Route path="/search" component={ SearchResultsContainer } />
          <Route path="/spots/:spotId" component={ SpotShowContainer } />
          <Route path="/create" component={ ParentFormContainer }/>
          <Route path="/trips" component={ TripsShowContainer } />
          <Route path="/listings" component={ HostedSpotsContainer } />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </Provider>
  );
};


export default Root;
