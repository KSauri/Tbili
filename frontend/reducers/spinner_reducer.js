import { RECEIVE_SPOT, RECEIVE_SPOTS } from '../actions/spot_actions';
import { LOAD_SPOT, LOAD_SPOTS } from '../actions/spinner_actions';

const initialState = false;

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
      case LOAD_SPOT:
      case LOAD_SPOTS:
        return true;
      case RECEIVE_SPOT:
      case RECEIVE_SPOTS:
      
        return false;
      default:
        return state;
  }
};
