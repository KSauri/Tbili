import BookingReviewFormContainer from './booking_review_container';
import ReviewIndexContainer from './review_index_container';
import { fetchCurrentUserBooking } from '../../../actions/booking_actions';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class BookingReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: !!this.props.booking
    };
  }


  componentDidMount() {
    this.props.fetchCurrentUserBooking(this.props.params.spotId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current_user === null && this.props.current_user !== null) {
      this.props.fetchCurrentUserBooking();
    } else if (nextProps.current_user !== null && this.props.current_user === null)
    {
      this.props.fetchCurrentUserBooking(); }
  }

  render() {

    return(
      <div>
        <ReviewIndexContainer />
        { this.props.booking.current_user_last_booking ? <BookingReviewFormContainer /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_user: state.session.currentUser,
    booking: state.booking,
    spotId: state.spot.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUserBooking: (spotId) => dispatch(fetchCurrentUserBooking(spotId))
  };
};

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(BookingReviewContainer));
//
// <BookingReviewFormContainer />
