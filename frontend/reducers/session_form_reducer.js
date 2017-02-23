import {
  SHOW_FORM,
  CLOSE_FORM } from '../actions/session_actions';
import merge from 'lodash/merge';
// TODO import merge from immutable

// showForm: false,
// formType: null,


const SessionFormReducer = (state = { showForm: false, formType: null }, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SHOW_FORM:
      return { showForm: true, formType: action.formType };
    case CLOSE_FORM:
      return Object.assign({}, state, { showForm: false });
    default:
      return state;
  }
};

export default SessionFormReducer;
