import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { createNewReview } from '../../../actions/booking_actions';


const mapStateToProps = (state) => {
  let reviews = state.spot.reviews_info || [];
  return {
    reviews: reviews
  };
};


export default connect(
  mapStateToProps,
  null
)(ReviewIndex);
