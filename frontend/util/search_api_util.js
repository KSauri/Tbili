export const fetchSearchLocations = (name) => (
  $.ajax({
    method: "GET",
    url: "/api/search/locations",
    data: { name: name }
  })
);
