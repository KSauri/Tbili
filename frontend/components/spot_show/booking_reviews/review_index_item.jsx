import React, { Component } from 'react';
import { withRouter } from 'react-router';

const ReviewIndexItem = (props) => {

  return(
    <section className="flex-row">
      <div className="flex-column">
        <img className="host-pic" />
        <h4>HOST NAME</h4>
      </div>
      <div className="flex-column">
        <p>REVIEW TEXT</p>
        <h5>REVIEW MONTH</h5>
      </div>
    </section>
  );
};



export default withRouter(ReviewIndexItem);
