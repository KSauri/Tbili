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

export const fetchBounds = (address) => (
  $.ajax({
    method: "GET",
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyChWynjm5jgi46S1tGogTe9oQh6GfN-KgY`
  })
);

export const fetchSearchSpots = (searchParams) => (
  $.ajax({
    method: "GET",
    url: "api/spots",
    data: { filters }
  })
);
