import React, { Component } from 'react';
import UpdateResultsFormContainer from './update_results_form/update_results_form_container';
import SearchResultIndexContainer from './search_result_index/search_result_index_container';

const SearchFormAndResults = () => {
  return (<div>
    <UpdateResultsFormContainer />
    <SearchResultIndexContainer />
  </div>);
};

export default SearchFormAndResults;
