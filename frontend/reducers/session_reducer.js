import {
  RECEIVE_CURRENT_USER,
  LOGOUT,
  RECEIVE_ERRORS,
  CLEAR_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';
// TODO import merge from immutable

const _nullUser = Object.freeze({
  currentUser: null,
  errors: {}
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, _nullUser, {
        currentUser
      });
    case LOGOUT:
      return merge({}, _nullUser);
    case CLEAR_ERRORS:
      return Object.assign({}, state, { errors: {} });
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullUser, {
        errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
