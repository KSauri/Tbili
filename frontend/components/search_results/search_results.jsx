import React, { Component } from 'react';
import SearchMapContainer from './map/map_container';
import SearchFormAndContainer from './search_form_and_results';

const SearchResults = () => {
  return (<div className="search-result-outer-container">
    <SearchFormAndContainer />
    <SearchMapContainer  />
  </div>);
};

export default SearchResults;
