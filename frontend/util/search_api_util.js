export const fetchSearchLocations = (searchParams) => (
  $.ajax({
    method: "GET",
    url: "/api/search/locations",
    data: { searchParams }
  })
);

export const fetchBoundaries = (address) => (
  $.ajax({
    method: "GET",
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyChWynjm5jgi46S1tGogTe9oQh6GfN-KgY`
  })
);

export const parseBoundaries = (boundsObj) => {
  return ({ ne: { lat: boundsObj.results[0].geometry.bounds.northeast.lat,
      lng: boundsObj.results[0].geometry.bounds.northeast.lng },
      sw: { lat: boundsObj.results[0].geometry.bounds.southwest.lat,
        lng: boundsObj.results[0].geometry.bounds.southwest.lng }});
};


//
// submitForm() {
//   fetchBoundaries(address).then(parseBoundaries).then(parsedBoundaries => this.props.submitForm(parsedBoundaries, this.state.guest_no, this.state.start_date))
// }

//
// function sleep(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000);
//   })
// }
