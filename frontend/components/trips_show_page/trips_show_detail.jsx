import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';


const TripsShowDetail = (props) => {

  return (
    <ul className="trips-show-detail flex-column">
      <li>
        <div className="trip-img">
          <img src={ props.booking.image }/>
        </div>
      </li>
      <li>
        <h3>{ props.booking.name }</h3>
      </li>
      <li>
        <h4>{ props.booking.start_date }</h4>
      </li>
      <li>
        <h4>{ props.booking.end_date }</h4>
      </li>
      <li>
        <h4>{ props.booking.guest_number }</h4>
      </li>
    </ul>
  );
};



export default TripsShowDetail;










// const shouldDisplay = function(currIdx, ownIdx) {
//   if (Math.abs(ownIdx - currIdx) < 2) {
//     return "spot-detail";
//   } else {
//     return "no-display";
//   }
// };
