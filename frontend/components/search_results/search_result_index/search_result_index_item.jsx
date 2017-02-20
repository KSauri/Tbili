import React from 'react';
import { Link } from 'react-router';

const SearchResultIndexItem = ({ spot }) => {
  return (
    <ul className="search-result-index-item">
      <img className="search-spot-img" src={spot.image}/>
      <li>
        <h4 className="spot-price">${spot.price} </h4>
        <h4 className="spot-property">
          {spot.property_type}
        </h4>
      </li>
      <li>
        <span className="spot-name">{spot.name}</span>
      </li>
    </ul>
  );
};



export default SearchResultIndexItem;


// const stars = [];

// <li className="featured-spot-image">
//   <Link to={ `/spots/${spot.id}` }><img src={spot.image_url} /></Link>
// </li>


// for (var i = 0; i < parseInt(spot.rating); i++) {
//   stars.push(
//     <img key={i} className="stars-featured" src={window.images.star}/>
//   );
// }
