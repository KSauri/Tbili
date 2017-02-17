import { RECEIVE_BOUNDARIES } from '../actions/spot_actions';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOUNDARIES:
      return action.boundaries;
    default:
      return state;
  }
};


export default SearchReducer;
