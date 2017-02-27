import { connect } from 'react-redux';
import BookingReviewForm from './booking_review_form';
import { createNewReview } from '../../../actions/booking_actions';
import { fetchSpot } from '../../../actions/spot_actions';
import { withRouter } from 'react-router';


const mapStateToProps = (state) => {
  return {
    host: state.spot.host_f_name,
    errors: state.errors.reviews,
    booking: state.booking.current_user_last_booking
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { createNewReview: booking => dispatch(createNewReview(booking)),
    fetchSpot: (spotId) => dispatch(fetchSpot(spotId))};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingReviewForm);
