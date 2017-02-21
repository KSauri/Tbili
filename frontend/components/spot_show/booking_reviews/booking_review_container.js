import { connect } from 'react-redux';
import BookingReviewForm from './booking_reviews';
import { createNewReview } from '../../../actions/booking_actions';


const mapStateToProps = (state) => {
  return {
    errors: state.errors.reviews
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
