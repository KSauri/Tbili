import { Link } from 'react-router';
import { connect } from 'react-redux';
import TripsShow from './trips_show';
import { fetchBookings } from '../../actions/booking_actions';
import { pastBookings, upcomingBookings } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    pastBookings: pastBookings(state),
    upcomingBookings: upcomingBookings(state)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsShow);
