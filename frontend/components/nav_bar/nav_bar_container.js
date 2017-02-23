import { connect } from 'react-redux';
import { logout, showFormModal, closeFormModal } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = (state) => ({   // Gives access to the current
  currentUser: state.session.currentUser,
  showForm: state.session_form.showForm,
  formType: state.session_form.formType          // user in the header
});

const mapDispatchToProps = dispatch => ({ // Gives access to logout
  logout: () => dispatch(logout()),
  showFormModal: (formType) => dispatch(showFormModal(formType)),
  closeFormModal: () => dispatch(closeFormModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
