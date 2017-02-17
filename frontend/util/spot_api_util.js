export function fetchFeaturedSpots() {
  return $.ajax ({
    method: "GET",
    url: "api/spots",
    data: { featured: true }
  });
}
