import React from 'react';
import { Link } from 'react-router';

const FeaturedSpotDetail = (props) => {

  const shouldDisplay = function(currIdx, ownIdx) {
    if (Math.abs(ownIdx - currIdx) < 2) {
      return "spot-detail";
    } else {
      return "no-display";
    }
  };

  return (
    <ul className={ shouldDisplay(props.currIdx, props.ownIdx) }>
      <img className="spot-img" src={props.spot.image}/>
      <li>
        <h4>${props.spot.price} </h4>
        <h4>
          {props.spot.property_type}
        </h4>
      </li>
      <li>
        {props.spot.name}
      </li>
    </ul>
  );
};



export default FeaturedSpotDetail;
// <li className="featured-spot-image">
// <Link to={ `/spots/${spot.id}` }><img src={spot.image_url} /></Link>
// </li>


// const stars = [];
// for (var i = 0; i < parseInt(spot.rating); i++) {
//   stars.push(
//     <img key={i} className="stars-featured" src={window.images.star}/>
//   );
// }
