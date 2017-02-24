import { RECEIVE_SPOT } from '../actions/spot_actions';
import { LOAD_SPOT } from '../actions/spinner_actions';

const initialState = false;

export default (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
      case LOAD_SPOT:
        return true;
      case RECEIVE_SPOT:
        return false;
      default:
        return state;
  }
};
