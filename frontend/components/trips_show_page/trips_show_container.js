import { Link } from 'react-router';
import { connect } from 'react-redux';
import TripsShow from './trips_show';
import { fetchBookings } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    bookings: state.bookings
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookings: (spotId) => dispatch(fetchBookings(spotId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripsShow);
