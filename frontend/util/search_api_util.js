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
