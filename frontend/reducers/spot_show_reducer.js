import { RECEIVE_SPOT, RECEIVE_SPOT_SHOW_ERRORS } from '../actions/spot_actions';


// const _defaultSpot = Object.freeze({
//   {}
// });

const SpotShowReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SPOT:
      return action.spot;
    default:
      return state;
  }
};


export default SpotShowReducer;
