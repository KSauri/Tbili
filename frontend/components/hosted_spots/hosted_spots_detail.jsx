import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import moment from 'moment';


const HostedSpotsDetail = (props) => {
  return (
    <ul className="flex-row hosted-spot-detail">
      <li className="hosted-spot-detail-1">
        <div className="flex-column">
          <h2> {props.spot.name} </h2>
          <h3> Type: { props.spot.property_type } </h3>
          <h3> $ { props.spot.price } </h3>
          <h4> Bed Number: { props.spot.bed_number } </h4>
          <button>Unlist Property</button>
        </div>
      </li>
      <li className="hosted-spot-detail-3">
        <Link to={`/spots/${props.spot.id}`}>
          <img className="spot-img" src={props.spot.image}/>
        </Link>
      </li>
    </ul>
  );
};

export default HostedSpotsDetail;

    //  {/* <li className="hosted-spot-detail-2"> */}
