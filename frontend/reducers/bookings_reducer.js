import { RECEIVE_BOOKING, RECEIVE_BOOKINGS } from '../actions/booking_actions';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKING:
      let nextState = Object.assign({}, state, action.booking);
      return nextState;
    case RECEIVE_BOOKINGS:
      return action.bookings;
    default:
      return state;
  }
};

export default BookingsReducer;
