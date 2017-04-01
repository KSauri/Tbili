import React from 'react';
import SearchResultIndexRowItem from './search_result_index_row_item';
// import SearchResultIndexItem from './search_result_index_item';

export default class SearchResultIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let body = document.querySelector("body");
    let classString = body.className;
    let newClass = classString.concat(" no-scroll"); // Adds the class "main__section" to the string (notice the leading space)
    body.className = newClass;
  }

  componentWillUnmount() {
    let body = document.querySelector("body");
    body.className = "";
  }

  render() {
    let spots = [];
    for (var i = 0; i < this.props.spots.length; i+= 2) {
      spots.push(<SearchResultIndexRowItem key={i} spotOne={this.props.spots[i]}
        spotTwo={this.props.spots[i+1]} />);
    }
    // let spots = this.props.spots.map((spot) =>
    //     <SearchResultIndexItem key={spot.id} spot={spot}/>
    // );
    return (
      <article className="search-spots-results">
        <ul className="search-spots-list">{ spots }</ul>
      </article>
    );
  }

}
