import { fetchBounds } from '../actions/spot_actions';


const getBoundaresFromGoogle = store => next => action => {
    if (typeof action === "function" && action.type === "getBoundaries") {
      return fetchBounds(action.address).then(boundaries => fetchSpots(boundaries, dispatch));
    }
    return next(action);
};


//
// export const fetchBounds = (city) => (
//   $.ajax({
//     method: "GET",
//     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyChWynjm5jgi46S1tGogTe9oQh6GfN-KgY`
//   })
// );
