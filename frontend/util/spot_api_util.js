export function fetchFeaturedSpots() {
  return $.ajax ({
    method: "GET",
    url: "api/spots",
    data: { featured: true }
  });
}

// export const fetchSearchSpots = (filters) => (
//   $.ajax({
//     method: "GET",
//     url: "api/spots",
//     data: { filters }
//   })
// );



export const fetchSpots = (filters) => (
  $.ajax({
    method: "GET",
    url: "api/spots",
    data: { filters }
  })
);

// fetchBoundaries("new york").then(bounds => parseBoundaries(bounds)).then(bounds => store.dispatch(fetchSpots(bounds)))
