import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createNewBooking } from '../../../actions/booking_actions';


const mapStateToProps = (state) => {
  debugger
  return {
    available_days: state.spot.available_days,
    guest_limit: state.spot.guest_limit,
    errors: state.errors.booking
  };
};

const mapDispatchToProps = dispatch => {
  return { createNewBooking: booking => dispatch(createNewBooking(booking)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
