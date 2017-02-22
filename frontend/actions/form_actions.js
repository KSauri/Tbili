import * as APIUtil from "../util/form_api_util";
import * as SpotActions from "./spot_actions";

export const RECEIVE_SPOT_CREATE_ERRORS = "RECEIVE_SPOT_CREATE_ERRORS";
export const CLEAR_SPOT_FORM_ERRORS = "CLEAR_SPOT_FORM_ERRORS";
export const UPDATE_FORM = "UPDATE_FORM";

export function receiveSpotCreateErrors(errors) {
  return {
    type: RECEIVE_SPOTS_CREATE_ERRORS,
    errors
  };
}

export const clearSpotFormErrors = () => ({
  type: CLEAR_SPOT_FORM_ERRORS
});

export const createSpot = (spot) => dispatch => (
  APIUtil.createSpot(spot).then(spot => dispatch(
    SpotActions.receiveSpot(spot)),
    err => dispatch(receiveSpotCreateErrors(err.responseJSON))
  )
);

export const updateForm = (formParams) => ({
  type: UPDATE_FORM,
  formParams
});


export const receiveBookings = (bookings) => ({
  type: RECEIVE_BOOKINGS,
  bookings
});
