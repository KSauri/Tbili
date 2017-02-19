import React from 'react';
import SearchResultIndexItem from './search_result_index_item';

export default class SearchResultIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let spots = this.props.spots.map((spot) =>
        <SearchResultIndexItem key={spot.id} spot={spot}/>
    );
    return (
      <article className="search-spots-results">
        <ul className="search-spots-list group">{ spots }</ul>
      </article>
    );
  }

}




// spots() {
//   this.props.spots.map((spot) => {
//     return (
//       <SearchResultIndexItem key={spot.id} spot={spot}/>
//     );
//   });
// }
