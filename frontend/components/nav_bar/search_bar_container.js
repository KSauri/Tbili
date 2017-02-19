import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { clearSpotErrors } from '../../actions/spot_actions';
import { fetchSearchSpots } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return { errors: state.spots.errors };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchSearchSpots: (filters) => dispatch(fetchSearchSpots(filters)),
    clearSpotErrors: () => dispatch(clearSpotErrors())
  });
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
