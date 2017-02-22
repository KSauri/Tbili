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
    if (state.spots.spots[id].property_type === "full home" && state.spots.spots[id].price < 215) {
      spotsArray.push(state.spots.spots[id]);
    }
  });

  return spotsArray;
};
export const selectFeaturedFancyHomes = (state) => {
  const ids = Object.keys(state.spots.spots);
  const spotsArray = [];
  ids.forEach((id) => {
    if (state.spots.spots[id].property_type === "full home" && state.spots.spots[id].price >= 215) {
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

export const getAvailability = ({spot}) => {
  return ({
    available_days: spot.available_days
  });
}





export const selectSpotProperties = ({spot}) => {
  return ({
    name: spot.name,
    bathroom_number: spot.bathroom_number,
    bed_number: spot.bed_number,
    cancellation_policy: spot.cancellation_policy,
    description: spot.description,
    family_friendly: spot.family_friendly,
    host_f_name: spot.host_f_name,
    host_image: spot.host_image,
    host_id: spot.host_id,
    kitchen: spot.kitchen,
    location: spot.location,
    minimum_stay: spot.minimum_stay,
    monthly_discount: spot.monthly_discount,
    pets_allowed: spot.pets_allowed,
    price: spot.price,
    property_type: spot.property_type,
    weekly_discount: spot.weekly_discount,
    wireless_internet: spot.wireless_internet,
    guest_limit: spot.guest_limit
  });
};
