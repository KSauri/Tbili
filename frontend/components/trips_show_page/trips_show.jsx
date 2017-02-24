import React, { Component } from 'react';
import { withRouter } from 'react-router';
import TripsShowDetail from './trips_show_detail';

class TripsShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBookings();
  }

  render() {
    let pastBookings = this.props.pastBookings
      .map((booking, idx) => {
      return (<TripsShowDetail key={ idx } booking={ booking }/>);
    });
    let upcomingBookings = this.props.upcomingBookings
      .map((booking, idx) => {
        return (<TripsShowDetail key={ idx } booking={ booking }
          delete={ this.props.deleteBooking }/>);
      });

    return (
      <div className="trips-show-index">
        <div className="flex-column">
          <h2>Upcoming Trips</h2>
          <ul className="flex-row upcoming">
            { upcomingBookings }
          </ul>
        </div>
        <div className="flex-column">
          <h2>Past Trips</h2>
          <ul className="flex-row past-trips">
            { pastBookings }
          </ul>
        </div>
      </div>);
  }
}

export default withRouter(TripsShow);
