import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import styledMapType from './map_style';
import MarkerManager from '../../../util/marker_manager';


class SpotMap extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let _mapOptions = {
      center: {lat: this.props.spot.lat || 41.9028,
        lng: this.props.spot.lng || 12.4964},
      zoom: 13,
    };
    this.map = new google.maps.Map(this.mapNode, _mapOptions);

    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');
    // this.MarkerManager = new MarkerManager(this.map);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.spot !== nextProps.spot) {
      let center = new google.maps.LatLng(nextProps.spot.lat, nextProps.spot.lng);
      this.map.panTo(center);
    }
  }

  // componentDidUpdate() {
  //   this.MarkerManager.updateMarkers(this.props.spots);
  // }


  render() {
    // debugger
    return <div className="map-show" ref={ map => this.mapNode = map }>Map</div>;
  }
}

export default withRouter(SpotMap);
