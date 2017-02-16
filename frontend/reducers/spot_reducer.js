import { RECEIVE_SPOTS, RECEIVE_SPOT_ERRORS } from '../actions/spot_actions';

const SpotReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SPOTS:
      return action.spots;
    case RECEIVE_SPOT_ERRORS:
      return { errors: action.errors };
    default:
      return state;
  }
};


export default SpotReducer;
