import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import SpotReducer from './spot_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  spots: SpotReducer
});

export default RootReducer;
