import React, { Component } from 'react';
import SpotMapContainer from './map/map_container';
import { withRouter } from 'react-router';

class SpotShow extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.router.params.spotId);
  }

  render() {
    return (<div>
      <SpotMapContainer spot={ this.props.spot }/>
    </div>);
  }
}

export default withRouter(SpotShow);
