import { connect } from 'react-redux';
import FeaturedHomes from './featued_homes';
import { selectSpotsFromState } from '../../reducers/selectors';
import { fetchFeaturedSpots } from '../../actions/spot_actions';

const mapStateToProps = (state) => ({
  spots: selectSpotsFromState(state)
});

const mapDispatchToProps = dispatch => ({
  fetchFeaturedSpots: () => dispatch(fetchFeaturedSpots()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedSpots);
