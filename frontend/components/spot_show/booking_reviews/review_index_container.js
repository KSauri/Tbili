import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { createNewReview } from '../../../actions/booking_actions';


const mapStateToProps = (state) => {
  return {
    reviews: state.spot.reviews_info,
  };
};


export default connect(
  mapStateToProps,
  null
)(ReviewIndex);
