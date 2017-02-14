import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => ({   // Gives access to the current
  currentUser: session.currentUser          // user in the header
});

const mapDispatchToProps = dispatch => ({ // Gives access to logout
  logout: () => dispatch(logout())        // method in header
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
