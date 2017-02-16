export const selectSpotsFromState = (state) => {
  const ids = Object.keys(state.spots);
  const spotsArray = [];
  ids.forEach((id) => {
    spotsArray.push(state.spots[id]);
  });

  return spotsArray;
};
