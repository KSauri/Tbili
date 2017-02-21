import { connect } from 'react-redux';
import { selectFilteredSpotsFromState } from '../../../reducers/selectors';
import { fetchSpot } from '../../../actions/search_actions';
import { withRouter } from 'react-router';

import SpotMap from './map';

// const mapStateToProps = (state, ownProps) => {
//   let spot;
//   if (state.spots.spots[ownProps.router.params.spotId]) {
//     spot = state.spots.spots[ownProps.router.params.spotId];
//   } else {
//     spot = state.spot;
//   }
//   return {
//     spot: spot
//   };
// };


export default withRouter(connect(
  null,
  null
)(SpotMap));
