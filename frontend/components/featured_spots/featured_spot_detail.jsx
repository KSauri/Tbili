import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';


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
      <Link to={`/spots/${props.spot.id}`}>
        <img className="spot-img" src={props.spot.image}/>
      </Link>
      <li>
        <h4 className="spot-price">${props.spot.price} </h4>
        <h4 className="spot-property">
          {props.spot.property_type}
        </h4>
      </li>
      <li>
        <span className="spot-name">{props.spot.name}</span>
      </li>
    </ul>
  );
};



export default FeaturedSpotDetail;
