import { RECEIVE_BOOKING_ERRORS,
  RECEIVE_REVIEW_ERRORS,
  RECEIVE_SPOT_CREATE_ERRORS } from '../actions/booking_actions';



const ErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return Object.assign({}, { booking: action.errors });
    case RECEIVE_REVIEW_ERRORS:
      return Object.assign({}, { reviews: action.errors });
    case RECEIVE_SPOT_CREATE_ERRORS:
      return Object.assign({}, { spot_create: action.errors });
    default:
      return state;
  }
};

export default ErrorsReducer;
