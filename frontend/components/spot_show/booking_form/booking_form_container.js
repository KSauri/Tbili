import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { createNewBooking } from '../../../actions/booking_actions';


const mapStateToProps = (state) => {

  return {
    spot_id: state.spot.id,
    available_days: state.spot.available_days,
    guest_limit: state.spot.guest_limit,
    price: state.spot.price,
    errors: state.errors.booking || []
  };
};

const mapDispatchToProps = dispatch => {
  return { createNewBooking: booking => dispatch(createNewBooking(booking)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingForm);
