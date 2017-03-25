import { connect } from 'react-redux';
import HomeSearchBar from './home_search_bar';
import { clearSpotErrors } from '../../actions/spot_actions';
import { fetchSearchSpots } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  let address = state.filters.bounds.address ? state.filters.bounds.address : "";
  return { errors: state.spots.errors,
  address };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchSearchSpots: (filters) => dispatch(fetchSearchSpots(filters)),
    clearSpotErrors: () => dispatch(clearSpotErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSearchBar);
