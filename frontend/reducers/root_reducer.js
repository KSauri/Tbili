import {combineReducers} from 'redux';
import SearchReducer from './search_reducer';
import SessionReducer from './session_reducer';
import SpotReducer from './spot_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  spots: SpotReducer,
  filters: SearchReducer
});

export default RootReducer;
