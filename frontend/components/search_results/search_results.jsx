import React, { Component } from 'react';
import SearchMapContainer from './map/map_container';
import SearchResultIndexContainer from './search_result_index/search_result_index_container';

const SearchResults = () => {
  return (<div>
    <SearchMapContainer />
    <SearchResultIndexContainer />
  </div>);
};

export default SearchResults;
