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
      zoom: 17,
    };

    this.map = new google.maps.Map(this.mapNode, _mapOptions);
    if (this.props.spot.lat) {

      this.spotCircle = new google.maps.Circle({
        strokeColor: '#2EF4C1',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#2EF4C1',
        fillOpacity: 0.35,
        map: this.map,
        center: {lat: this.props.spot.lat,
          lng: this.props.spot.lng},
        radius: 50
      });
    }

    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');
    // this.MarkerManager = new MarkerManager(this.map);
  }

  componentWillReceiveProps(nextProps) {
    // if (this.props.params.spotId !== nextProps.params.spotId) {
    // }
    if (this.props.spot.lat === undefined && nextProps.spot.lat !== undefined) {
      this.spotCircle = new google.maps.Circle({
        strokeColor: '#2EF4C1',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#2EF4C1',
        fillOpacity: 0.35,
        map: this.map,
        center: {lat: nextProps.spot.lat,
          lng: nextProps.spot.lng},
        radius: 50
      });
    }
    if (this.props.spot.lat !== nextProps.spot.lat || this.props.spot.lng !== nextProps.spot.lng) {
        if (this.spotCircle) {
          this.spotCircle.setMap(null);
        }
        this.spotCircle = new google.maps.Circle({
          strokeColor: '#2EF4C1',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#2EF4C1',
          fillOpacity: 0.35,
          map: this.map,
          center: {lat: nextProps.spot.lat,
            lng: nextProps.spot.lng},
          radius: 50
        });
        let center = new google.maps.LatLng(nextProps.spot.lat, nextProps.spot.lng);
        this.map.setZoom(17);
        this.map.panTo(center);
    }
  }

  // componentDidUpdate() {
  //   this.MarkerManager.updateMarkers(this.props.spots);
  // }


  render() {
    return <div className="map-show" ref={ map => this.mapNode = map }>Map</div>;
  }
}

export default withRouter(SpotMap);
