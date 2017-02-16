import { connect } from 'react-redux';
import FeaturedNonHomes from './featured_non_homes';
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
)(FeaturedNonHomes);
