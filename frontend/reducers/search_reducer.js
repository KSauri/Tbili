import { RECEIVE_SEARCH_FILTERS } from '../actions/search_actions';
import merge from 'lodash/merge';

const _defaultFilters = Object.freeze({
  bounds: "",
  start_date: "",
  end_date: "",
  price_low: 0,
  price_high: 800,
  guest_no: 1,
  full_home: true,
  private_room: true,
  shared_room: true
});

// TODO You need to make sure that the internal state is being set properly
// in the two search bars, specifically the address
// you need to look into using merge here, or pulling the address out of "bounds"
// and you need to reset the address in the nav because it won't do it automatically


const SearchReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_FILTERS:
      return Object.assign({}, state, action.filters);
      // return merge(state, action.filters);
    default:
      return state;
  }
};


export default SearchReducer;
