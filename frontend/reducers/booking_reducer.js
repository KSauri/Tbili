import { RECEIVE_CURRENT_USER_BOOKING } from '../actions/booking_actions';

const BookingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER_BOOKING:
      return action.bookings;
    default:
      return state;
  }
};

export default BookingReducer;
