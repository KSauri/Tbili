import React, { Component } from 'react';
import { withRouter } from 'react-router';
import TripsShowDetail from './trips_show_detail';

class TripsShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let reviews = this.props.bookings.map((booking, idx) => {
      return (<TripsShowDetail key={ idx } booking={ booking }/>);
    });

    return (<div className="review-index flex-column">
      <div className="review-index-header flex-row">
        <h1 className="">{this.props.reviews.length} Reviews</h1>
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

export default withRouter(TripsShow);
