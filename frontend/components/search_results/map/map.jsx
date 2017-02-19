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
    // const map = this.refs.map;
    this.map = new google.maps.Map(this.mapNode, _mapOptions);

    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');
    this.MarkerManager = new MarkerManager(this.map);
    // this._handleMarkerClick.bind(this) as second arg to markermanager
    // if (this.props.singleBench) {
    //   this.props.fetchBench(this.props.benchId);
    // } else {
    this._registerListeners();
    this.MarkerManager.updateMarkers(this.props.spots);
    // }
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
    // google.maps.event.addListener(this.map, 'click', event => {
    //   const coords = _getCoordsObj(event.latLng);
    //   this._handleClick(coords);
    // });
  }

  // _handleMarkerClick(bench) {
  //   this.props.router.push(`benches/${bench.id}`);
  // }
  //
  // _handleClick(coords) {
  //   this.props.router.push({
  //     pathname: "benches/new",
  //     query: coords
  //   });
  // }

  render() {
    return <div className="map" ref={ map => this.mapNode = map }>Map</div>;
  }
}

export default withRouter(SearchMap);

//
// if (this.props.bounds.viewport) {
//   this.map.fitBounds(this.props.bounds.viewport);
// }
