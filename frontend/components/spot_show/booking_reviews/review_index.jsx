import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let reviews = this.props.reviews.map((review, idx) => {
      return (<ReviewIndexItem key={ idx } review={ review }/>);
    });
    return (<div className="review-index flex-column">
      <div className="flex-row">
        <h1>SPOT NUMBER OF REVIEWS</h1>
        <img className="average-stars" />
      </div>
      <section>
        <ul className="flex-column">
          { reviews }
        </ul>
      </section>
    </div>);
  }
}

export default withRouter(ReviewIndex);
