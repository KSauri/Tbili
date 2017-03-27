import React, { Component } from 'react';
import { withRouter } from 'react-router';
import HostedSpotsDetail from './hosted_spots_detail';

class HostedSpotsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHostedSpots();
  }

  render() {
    let hostedSpots = this.props.spots
      .map((spot, idx) => {
        return (<HostedSpotsDetail key={ idx } deleteSpot={ this.props.deleteSpot } spot={ spot } />);
      });

    return (
      <div className="hosted-spot-index">
        <div className="flex-column">
          <h2>Your Spots</h2>
          <ul className="flex-row upcoming">
            { hostedSpots }
          </ul>
        </div>
      </div>);
  }
}

export default withRouter(HostedSpotsIndex);


// delete={ this.props.deleteBooking }
