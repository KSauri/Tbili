import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import LogInForm from './log_in_form';

function mapStateToProps(state) {
  return { errors: state.session.errors };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInForm);
