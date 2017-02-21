export default class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = [];
    this._createMarkerFromSpot = this._createMarkerFromSpot.bind(this);
    this._removeMarker = this._removeMarker.bind(this);
    this._markersToRemove = this._markersToRemove.bind(this);
  }

  updateMarkers(spots){
    this.spots = spots;
    this._spotsToAdd().forEach(this._createMarkerFromSpot);
    this._markersToRemove().forEach(this._removeMarker);
  }

  _spotsToAdd() {
    const currentSpots = this.markers.map( marker => marker.spotId );
    return this.spots.filter( spot => !currentSpots.includes(spot.id) );
  }

  _markersToRemove(){
    const spotIds = this.spots.map( spot => spot.id );
    return this.markers.filter( marker => !spotIds.includes(marker.spotId) );
  }

  _createMarkerFromSpot(spot) {
    const pos = new google.maps.LatLng(spot.lat, spot.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      spotId: spot.id
    });
    marker.addListener('click', () => this.handleClick(spot));
    this.markers.push(marker);
  }

  _removeMarker(marker) {
    const idx = this.markers.indexOf( marker );
    this.markers[idx].setMap(null);
    this.markers.splice(idx, 1);
  }
}
