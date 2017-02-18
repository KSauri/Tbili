import { RECEIVE_SEARCH_FILTERS } from '../actions/search_actions';


const _defaultFilters = Object.freeze({
  filters: {}
});

const SearchReducer = (state = _defaultFilters, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_FILTERS:
      return Object.assign({}, state, { filters: action.filters});
    default:
      return state;
  }
};


export default SearchReducer;
