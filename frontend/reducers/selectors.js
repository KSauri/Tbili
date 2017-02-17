export const selectFeaturedNonHomes = (state) => {
  const ids = Object.keys(state.spots);
  const spotsArray = [];
  ids.forEach((id) => {
    if (state.spots[id].property_type !== "full home") {
      spotsArray.push(state.spots[id]);
    }
  });

  return spotsArray;
};
export const selectFeaturedHomes = (state) => {
  const ids = Object.keys(state.spots);
  const spotsArray = [];
  ids.forEach((id) => {
    if (state.spots[id].property_type === "full home" && state.spots[id].price < 150) {
      spotsArray.push(state.spots[id]);
    }
  });

  return spotsArray;
};
export const selectFeaturedFancyHomes = (state) => {
  const ids = Object.keys(state.spots);
  const spotsArray = [];
  ids.forEach((id) => {
    if (state.spots[id].property_type === "full home" && state.spots[id].price > 151) {
      spotsArray.push(state.spots[id]);
    }
  });

  return spotsArray;
};
