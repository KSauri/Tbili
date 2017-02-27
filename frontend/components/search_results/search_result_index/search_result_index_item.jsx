import React from 'react';
import { Link } from 'react-router';

const SearchResultIndexItem = ({ spot }) => {
  return (
    <ul className="search-result-index-item">
      <div className="search-spot-img" >
        <Link to={`/spots/${spot.id}`}>
          <img  src={spot.image}/>
        </Link>
      </div>
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
