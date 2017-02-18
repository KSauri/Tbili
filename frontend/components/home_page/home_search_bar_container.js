import { connect } from 'react-redux';
import HomeSearchBar from './home_search_bar';
import { fetchSpots, clearSpotErrors } from '../../actions/spot_actions';

const mapStateToProps = (state) => {
  return { errors: state.spots.errors };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchSpots: (spots) => dispatch(fetchSpots(spots)),
    clearSpotErrors: () => dispatch(clearSpotErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSearchBar);
