import * as APIUtil from '../util/spot_api_util';
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_SPOT_ERRORS = "RECEIVE_SPOT_ERRORS";

export function receiveSpots(spots) {
  return {
    type: RECEIVE_SPOTS,
    spots
  };
}

export const fetchFeaturedSpots = () => dispatch => (
  APIUtil.fetchFeaturedSpots().then(spots => dispatch(
    receiveSpots(spots)),
    err => dispatch(receiveSpotErrors(err.responseJSON))
  )
);

export function receiveSpotErrors(errors) {
  return {
    type: RECEIVE_SPOT_ERRORS,
    errors,
  };
}
