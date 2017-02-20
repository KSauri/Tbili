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

export const fetchSpot = (spotId) => (
  $.ajax({
    method: "GET",
    url: `api/spots/${spotId}`
  })
);
