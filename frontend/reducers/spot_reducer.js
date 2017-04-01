import { RECEIVE_SPOTS, CLEAR_SPOT_ERRORS, RECEIVE_SPOT_ERRORS } from '../actions/spot_actions';
import { RECEIVE_BOOKING } from '../actions/booking_actions';

const _defaultSpots = Object.freeze({
  spots: {},
  errors: {}
});

const SpotReducer = (state = _defaultSpots, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SPOTS:
      return Object.assign({}, _defaultSpots, { spots: action.spots});
    case RECEIVE_SPOT_ERRORS:
      let newState = Object.assign({}, state, { errors: action.errors });
      return newState;
    case CLEAR_SPOT_ERRORS:
      return Object.assign({}, state, { errors: {} });
    default:
      return state;
  }
};


export default SpotReducer;
