import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import SignUpForm from './sign_up_form';

function mapStateToProps({ session: { errors } }) {
  return { errors };
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors({}))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
