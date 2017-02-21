import React, { Component } from 'react';
import SpotPropertiesContainer from './spot_properties/spot_properties_container';
import BookingForm from './booking_form/booking_form';
import SpotMapContainer from './map/map_container';
import SpotImageContainer from './spot_properties/spot_img_container';
import { withRouter } from 'react-router';

class SpotShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.router.params.spotId);
  }

  render() {
    return (<div className="spot-show-container">
      <SpotImageContainer />
      <SpotPropertiesContainer />
      <SpotMapContainer spot={ this.props.spot }/>
    </div>);
  }
}

export default withRouter(SpotShow);
