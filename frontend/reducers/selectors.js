export const selectFeaturedNonHomes = (state) => {
  const ids = Object.keys(state.spots.spots);
  const spotsArray = [];
  ids.forEach((id) => {
    if (state.spots.spots[id].property_type !== "full home") {
      spotsArray.push(state.spots.spots[id]);
    }
  });

  return spotsArray;
};
export const selectFeaturedHomes = (state) => {
  const ids = Object.keys(state.spots.spots);
  const spotsArray = [];
  ids.forEach((id) => {
    if (state.spots.spots[id].property_type === "full home" && state.spots.spots[id].price < 150) {
      spotsArray.push(state.spots.spots[id]);
    }
  });

  return spotsArray;
};
export const selectFeaturedFancyHomes = (state) => {
  const ids = Object.keys(state.spots.spots);
  const spotsArray = [];
  ids.forEach((id) => {
    if (state.spots.spots[id].property_type === "full home" && state.spots.spots[id].price > 151) {
      spotsArray.push(state.spots.spots[id]);
    }
  });

  return spotsArray;
};


export const selectSpotsFromState = (state) => {
  const ids = Object.keys(state.spots.spots);
  const spotsArray = [];
  ids.forEach((id) => {
    spotsArray.push(state.spots.spots[id]);
  });

  return spotsArray;
};


export const selectFilteredSpotsFromState = (state) => {
  const ids = Object.keys(state.spots.spots);
  const spotsArray = [];
  const price_low = state.filters.price_low;
  const price_high = state.filters.price_high;
  const guest_no = state.filters.guest_no;
  const full_home = state.filters.full_home;
  const private_room = state.filters.private_room;
  const shared_room = state.filters.shared_room;
  ids.forEach((id) => {
    let spot = state.spots.spots[id];
    if (spot.price <= price_high &&
        spot.price >= price_low &&
        spot.bed_number >= guest_no &&
        (full_home && spot.property_type === "full home" ||
        private_room && spot.property_type === "private room" ||
        shared_room && spot.property_type === "shared room")) {
          spotsArray.push(state.spots.spots[id]);
        }
  });

  return spotsArray;
};
