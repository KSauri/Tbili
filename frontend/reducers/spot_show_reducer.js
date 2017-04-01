import { RECEIVE_SPOT, RECEIVE_SPOT_SHOW_ERRORS } from '../actions/spot_actions';
import { RECEIVE_BOOKING } from '../actions/booking_actions';



const SpotShowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SPOT:
      return Object.assign({}, state, action.spot);
    default:
      return state;
  }
};


export default SpotShowReducer;
