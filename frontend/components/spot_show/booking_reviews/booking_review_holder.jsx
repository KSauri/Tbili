import BookingReviewFormContainer from './booking_review_container';
import ReviewIndexContainer from './review_index_container';
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.current_user === null && this.props.current_user !== null) {
      console.log("did this first thing");
      console.log(nextProps.booking);
      this.setState({ showForm: !!nextProps.booking });
    } else if (nextProps.current_user !== null && this.props.current_user === null)
    { console.log("did the second thing");
      console.log(nextProps.booking);
      this.setState({ showForm: !!nextProps.booking }); }
  }

  render() {
    return(
      <div>
        <ReviewIndexContainer />
        { this.state.showForm ? <BookingReviewFormContainer /> : null }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_user: state.session.currentUser,
    booking: state.spot.current_user_last_booking
  };
};

export default withRouter(connect(mapStateToProps)(BookingReviewContainer));
//
// <BookingReviewFormContainer />
