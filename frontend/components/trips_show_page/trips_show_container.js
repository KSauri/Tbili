import { Link } from 'react-router';
import { connect } from 'react-redux';
import TripsShow from './trips_show';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import { pastBookings, upcomingBookings } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    pastBookings: pastBookings(state),
    upcomingBookings: upcomingBookings(state)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: () => dispatch(fetchBookings()),
  deleteBooking: (booking) => dispatch(deleteBooking(booking))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsShow);
