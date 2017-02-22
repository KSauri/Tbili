import SpotPropertiesContainer from './spot_properties/spot_properties_container';
import BookingReviewHolder from './booking_reviews/booking_review_holder';
import React from 'react';

class BookingReviewContainer extends React.Component {


  render() {
    return(
      <div className="spot-info">
        <SpotPropertiesContainer />
        <BookingReviewHolder />
      </div>

    );
  }
}

export default BookingReviewContainer;
