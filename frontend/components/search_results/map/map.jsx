import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';
import styledMapType from './map_style';
import MarkerManager from '../../../util/marker_manager';

// const _getCoordsObj = latLng => ({
//   lat: latLng.lat(),
//   lng: latLng.lng()
// });




class SearchMap extends Component {

  componentDidMount() {
    let _mapOptions = {
      center: {lat: this.props.bounds.center_lat || 41.9028,
        lng: this.props.bounds.center_lng || 12.4964},
      zoom: 13,
    };
    this.map = new google.maps.Map(this.mapNode, _mapOptions);
    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');
    this.MarkerManager = new MarkerManager(this.map);
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.fetchSearchSpots({bounds: bounds,
        start_date: "",
        end_date: ""});
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.bounds === "") {
      return;
    } else if (nextProps.bounds.address && this.props.bounds.address !== nextProps.bounds.address) {
      let center = new google.maps.LatLng(nextProps.bounds.center_lat, nextProps.bounds.center_lng);
      this.map.panTo(center);
    }
  }


  render() {
    return <div className="map" ref={ map => this.mapNode = map }>Map</div>;
  }
}

export default withRouter(SearchMap);

//
// if (this.props.bounds.viewport) {
//   this.map.fitBounds(this.props.bounds.viewport);
// }
