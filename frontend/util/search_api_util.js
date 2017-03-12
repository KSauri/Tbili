export const fetchSearchLocations = (searchParams) => (
  $.ajax({
    method: "GET",
    url: "/api/search/locations",
    data: { searchParams }
  })
);

export const fetchBoundaries = (address) => {
  return $.ajax({
    method: "GET",
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyChWynjm5jgi46S1tGogTe9oQh6GfN-KgY`
  });
};

export const parseBoundaries = (boundsObj) => {
  return ({
    address: boundsObj.results[0].address_components[0].long_name,
    viewport: boundsObj.results[0].geometry.viewport,
    center_lat: boundsObj.results[0].geometry.location.lat,
    center_lng: boundsObj.results[0].geometry.location.lng,
    northEast:
    { lat: boundsObj.results[0].geometry.bounds.northeast.lat,
      lng: boundsObj.results[0].geometry.bounds.northeast.lng },
    southWest:
      { lat: boundsObj.results[0].geometry.bounds.southwest.lat,
        lng: boundsObj.results[0].geometry.bounds.southwest.lng }
    }
  );
};

//
// address: "North America",
// viewport: { northEast: { lat: 70, lng: -50 }, southWest: { lat: 5, lng: -170 }},
// center_lat: 54.5259614,
// center_lng: -105.2551187,
// northEast:
// { lat: 83.97025599999999,
//   lng: -8.2617197 },
// southWest:
//   { lat: 5.496099999999999,
//     lng: 170.5957}
// }
