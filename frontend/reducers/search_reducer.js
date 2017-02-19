import { RECEIVE_SEARCH_FILTERS } from '../actions/search_actions';


const _defaultFilters = Object.freeze({
  bounds: "",
  start_date: "",
  end_date: "",
  price_low: 0,
  price_high: 100000,
  guest_no: 1,
  full_home: true,
  private_room: true,
  shared_room: true
});

const SearchReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_FILTERS:
      return Object.assign({}, state, action.filters);
    default:
      return state;
  }
};


export default SearchReducer;
