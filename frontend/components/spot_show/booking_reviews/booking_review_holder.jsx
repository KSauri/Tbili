import BookingReviewFormContainer from './booking_review_container';
import ReviewIndexContainer from './review_index_container';
import React from 'react';

const BookingReviewContainer = (props) => {

  return(
    <div>
      <ReviewIndexContainer />
      <BookingReviewFormContainer />
    </div>

  );
};

export default BookingReviewContainer;
