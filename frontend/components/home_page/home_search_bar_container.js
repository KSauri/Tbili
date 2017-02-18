import { connect } from 'react-redux';
import HomeSearchBar from './home_search_bar';
import { clearSpotErrors } from '../../actions/spot_actions';
import { fetchSearchSpots } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return { errors: state.spots.errors };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchSearchSpots: (spots) => dispatch(fetchSearchSpots(spots)),
    clearSpotErrors: () => dispatch(clearSpotErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSearchBar);
