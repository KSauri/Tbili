import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';
import moment from 'moment';


const TripsShowDetail = (props) => {
  let guestWord;
  let deleteButton;
  let deleteThisBooking = () => {
    props.delete(props.booking);
  };
  let startDate = moment(props.booking.start_date)
    .format("MMM Do YYYY");
  let endDate = moment(props.booking.end_date)
    .format("MMM Do YYYY");
  if (props.booking.guest_number) {
    guestWord = props.booking.guest_number > 1 ? "Guests" : "Guest";
  } else {
    guestWord = null;
  }
  if (props.delete) {
    deleteButton = <button onClick={ deleteThisBooking } >Cancel Booking</button>;
  } else {
    deleteButton = null;
  }

  return (
    <ul className="trips-show-detail flex-column">
      <li>
        <div className="trip-img">
          <Link to={ `/spots/${props.booking.spot_id}` }>
            <img src={ props.booking.image } />
          </Link>
          <img src={ props.host_img } />
        </div>
      </li>
      <li>
        <h3>{ props.booking.name }</h3>
      </li>
      <li>
        <h3>{ props.booking.host_name }</h3>
      </li>
      <li>
        <div className="trip-show-date-divider"></div>
      </li>
      <li >
        <h4>{ startDate }</h4>
      </li>
      <li>
        <h4>{ endDate }</h4>
      </li>
      { props.booking.guest_number ? <li><h4>{ props.booking.guest_number } { guestWord }</h4></li> : null }
      <li>
        { deleteButton }
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
