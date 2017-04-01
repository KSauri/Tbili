import React from 'react';
import SearchResultIndexItem from './search_result_index_item';

const SearchResultIndexRowItem = (props) => {

  return (
    <ul className="flex-row search-result-row">
      <SearchResultIndexItem spot={props.spotOne} />
      { props.spotTwo ? <SearchResultIndexItem spot={props.spotTwo} /> : null }
    </ul>
  );
};



export default SearchResultIndexRowItem;
