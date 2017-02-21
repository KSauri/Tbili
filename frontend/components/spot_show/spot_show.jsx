import React, { Component } from 'react';
import BookingFormContainer from './booking_form/booking_form_container';
import SpotMapContainer from './map/map_container';
import SpotImageContainer from './spot_properties/spot_img_container';
import SpotInfoHolder from './spot_info_holder';
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
      <div>
        <SpotInfoHolder />
        <BookingFormContainer />
      </div>
      <SpotMapContainer spot={ this.props.spot }/>
    </div>);
  }
}

export default withRouter(SpotShow);


// <SpotPropertiesContainer />
// <BookingReviewFormContainer />
