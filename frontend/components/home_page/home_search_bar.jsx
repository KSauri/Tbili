import React, {Component} from 'react';


const HomeSearchBar = (props) => (<div className="unfinished">
  <div className="search home-search">
    <img src={window.search} className="search-icon" />
    <span className="search-bar-text">Search Bar Holder</span>
  </div>
</div>);

export default HomeSearchBar;

// handle submit sends off the
// request to get the lat long
// then, when it returns it
// submits the form
