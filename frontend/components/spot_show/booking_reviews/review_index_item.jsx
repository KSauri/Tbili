import React, { Component } from 'react';
import { withRouter } from 'react-router';

const ReviewIndexItem = (props) => {
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];
  let month = new Date(props.review.end_date).getMonth();
  let monthName = monthNames[month];
  return(
    <section className="review-index-item flex-row">
      <div className="flex-column">
        <i className="review-index-icon fa fa-user" aria-hidden="true"></i>
        <h4>{ props.review.guest_f_name }</h4>
      </div>
      <div className="flex-column">
        <p>{ props.review.spot_review }</p>
        <h5>{ monthName }</h5>
      </div>
    </section>
  );
};



export default withRouter(ReviewIndexItem);
