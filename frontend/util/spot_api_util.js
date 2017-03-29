export function fetchFeaturedSpots() {
  return $.ajax ({
    method: "GET",
    url: "api/spots",
    data: { featured: true }
  });
}


export const fetchSpots = (filters) => (
  $.ajax({
    method: "GET",
    url: "api/spots",
    data: { filters }
  })
);

export const fetchHostedSpots = () => (
  $.ajax({
    method: "GET",
    url: "api/spots",
    data: { hosted: true }
  })
);

export const fetchSpot = (spotId) => (
  $.ajax({
    method: "GET",
    url: `api/spots/${spotId}`
  })
);

export const createSpot = (spot) => {
  return $.ajax({
    url: "api/spots",
    method: "POST",
    dataType: "json",
    contentType: false,
    processData: false,
    data: spot
  });
};

export function deleteSpot(spot) {
  return $.ajax ({
    method: "DELETE",
    url: `api/spots/${spot.id}`
  });
}
