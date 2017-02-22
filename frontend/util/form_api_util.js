export const createSpot = (spot) => {

  return $.ajax({
    url: "api/spots",
    method: "POST",
    contentType: false,
    processData: false,
    data: { spot }
  });
};
