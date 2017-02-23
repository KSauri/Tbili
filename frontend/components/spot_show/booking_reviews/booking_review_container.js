import { connect } from 'react-redux';
import BookingReviewForm from './booking_review_form';
import { createNewReview } from '../../../actions/booking_actions';


const mapStateToProps = (state) => {
  return {
    host: state.spot.host_f_name,
    errors: state.errors.reviews,
    booking: state.booking.current_user_last_booking
  };
};

const mapDispatchToProps = dispatch => {
  return { createNewReview: booking => dispatch(createNewReview(booking)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingReviewForm);


// reviews: state.spot.reviews_info,
