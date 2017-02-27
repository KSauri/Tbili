import * as APIUtil from '../util/spot_api_util';
import * as SearchUtil from '../util/search_api_util';
import { loadSpot } from './spinner_actions';
export const RECEIVE_SPOTS = "RECEIVE_SPOTS";
export const RECEIVE_BOUNDARIES = "RECEIVE_BOUNDARIES";
export const RECEIVE_SPOT_ERRORS = "RECEIVE_SPOT_ERRORS";
export const CLEAR_SPOT_ERRORS = "CLEAR_SPOT_ERRORS";
export const RECEIVE_SPOT = "RECEIVE_SPOT";
export const RECEIVE_SPOT_SHOW_ERRORS = "RECEIVE_SPOT_SHOW_ERRORS";
export const RECEIVE_SPOT_CREATE_ERRORS = "RECEIVE_SPOT_CREATE_ERRORS";
export const CLEAR_SPOT_FORM_ERRORS = "CLEAR_SPOT_FORM_ERRORS";

export function receiveSpots(spots) {
  return {
    type: RECEIVE_SPOTS,
    spots
  };
}

export function receiveSpotErrors(errors) {
  return {
    type: RECEIVE_SPOT_ERRORS,
    errors
  };
}

export function receiveSpotShowErrors(errors) {
  return {
    type: RECEIVE_SPOT_SHOW_ERRORS,
    errors
  };
}

export function receiveSpot(spot) {
  return {
    type: RECEIVE_SPOT,
    spot
  };
}

export const clearSpotErrors = () => ({
  type: CLEAR_SPOT_ERRORS
});

export const fetchFeaturedSpots = () => dispatch => (
  APIUtil.fetchFeaturedSpots().then(spots => dispatch(
    receiveSpots(spots)),
    err => dispatch(receiveSpotErrors(err.responseJSON))
  )
);


export const fetchSpots = (filters) => dispatch => {
  return APIUtil.fetchSpots(filters).then(spots => dispatch(
    receiveSpots(spots)
  ), err => dispatch(receiveSpotErrors(err.responseJSON)));
};

export const fetchSpot = (spotId) => dispatch => {
  dispatch(loadSpot());
  return APIUtil.fetchSpot(spotId).then(spot => dispatch(
    receiveSpot(spot)),
    err => dispatch(receiveSpotShowErrors(err.responseJSON)));
};



export const fetchBoundaries = (address) => dispatch => {
  SearchUtil.fetchBoundaries(address).then(boundaries =>
    dispatch(receiveBoundaries(boundaries)));
};

export const receiveBoundaries = (boundaries) => ({
    type: RECEIVE_BOUNDARIES,
    boundaries
  });


export const createSpot = (spot) => dispatch => (
  APIUtil.createSpot(spot).then(spot => dispatch(
    receiveSpot(spot)),
    err => dispatch(receiveSpotCreateErrors(err.responseJSON))
  )
);


export function receiveSpotCreateErrors(errors) {
  return {
    type: RECEIVE_SPOTS_CREATE_ERRORS,
    errors
  };
}
