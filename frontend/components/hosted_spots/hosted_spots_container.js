import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchHostedSpots, deleteSpot } from '../../actions/spot_actions';
import HostedSpotsIndex from './hosted_spots_index';

const mapStateToProps = (state, ownProps) => {
  let hostedSpots = Array.isArray(state.spots.spots) ? state.spots.spots : [];
  return {
    spots: hostedSpots
  };
};

const mapDispatchToProps = dispatch => ({
  fetchHostedSpots: () => dispatch(fetchHostedSpots()),
  deleteSpot: (spot) => dispatch(deleteSpot(spot))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HostedSpotsIndex);
