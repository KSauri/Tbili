import React from 'react';
import SearchResultIndexItem from './search_result_index_item';

export default class SearchResultIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let body = document.querySelector("body");
    var classString = body.className;
    var newClass = classString.concat(" no-scroll"); // Adds the class "main__section" to the string (notice the leading space)
    body.className = newClass;
  }

  componentWillUnmount() {
    let body = document.querySelector("body");
    body.className = "";
  }

  render() {
    let spots = this.props.spots.map((spot) =>
        <SearchResultIndexItem key={spot.id} spot={spot}/>
    );
    return (
      <article className="search-spots-results">
        <ul className="search-spots-list">{ spots }</ul>
      </article>
    );
  }

}
