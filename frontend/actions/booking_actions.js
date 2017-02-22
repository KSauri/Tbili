import * as APIUtil from '../util/booking_api_util';
import { createBooking, createReview } from './spot_actions';

export const RECEIVE_BOOKING = "RECEIVE_BOOKING";
export const RECEIVE_BOOKINGS = "RECEIVE_BOOKINGS";
export const RECEIVE_BOOKING_ERRORS = "RECEIVE_BOOKING_ERRORS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const RECEIVE_CURRENT_USER_BOOKING = "RECEIVE_CURRENT_USER_BOOKING";

export const receiveBooking = (booking) => ({
  type: RECEIVE_BOOKING,
  booking
});

export const receiveBookings = (bookings) => ({
  type: RECEIVE_BOOKINGS,
  bookings
});

export function receiveBookingErrors(errors) {
  return {
    type: RECEIVE_BOOKING_ERRORS,
    errors
  };
}

export function receiveCurrentUserBooking(booking) {
  return {
    type: RECEIVE_CURRENT_USER_BOOKING,
    booking
  };
}

export const fetchCurrentUserBooking = (spotId) => dispatch => {
  return APIUtil.fetchCurrentUserBooking(spotId).then(booking =>
    dispatch(receiveCurrentUserBooking(booking)));
};

export function receiveReviewErrors(errors) {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
}

export const fetchBookings = () => dispatch => {
  return APIUtil.fetchBookings().then(bookings => dispatch(
    receiveBookings(bookings),
    err => dispatch(receiveBookingErrors(err.responseJSON))
  ));
};

export const createNewBooking = (booking) => dispatch => {
  return APIUtil.createBooking(booking).then(booking => dispatch(
    receiveBooking(booking)
  ), err => dispatch(receiveBookingErrors(err.responseJSON)));
};

export const createNewReview = (review) => dispatch => {
  return APIUtil.createReview(review).then(booking => dispatch(
    receiveBooking(booking)
  ), err => dispatch(receiveReviewErrors(err.responseJSON)));
};


// export const fetchBoundaries = (address) => dispatch => {
//   SearchUtil.fetchBoundaries(address).then(boundaries =>
//     dispatch(receiveBoundaries(boundaries)));
// };



// dispatch(receiveSearchFilters(filters));
