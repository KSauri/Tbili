import * as SearchUtil from '../util/search_api_util';
import * as APIUtil from '../util/spot_api_util';
import { receiveSpots } from './spot_actions';

export const RECEIVE_SEARCH_FILTERS = "RECEIVE_SEARCH_FILTERS";

export const receiveSearchFilters = (filters) => ({
  type: RECEIVE_SEARCH_FILTERS,
  filters
});

export const fetchSearchSpots = (filters) => dispatch => {
  dispatch(receiveSearchFilters(filters));
  return APIUtil.fetchSpots(filters).then(spots => dispatch(
    receiveSpots(spots)
  ), err => dispatch(receiveSpotErrors(err.responseJSON)));
};

export const fetchBoundaries = (address) => dispatch => {
  SearchUtil.fetchBoundaries(address).then(boundaries =>
    dispatch(receiveBoundaries(boundaries)));
};

export const receiveBoundaries = (boundaries) => ({
    type: RECEIVE_BOUNDARIES,
    boundaries
  });
