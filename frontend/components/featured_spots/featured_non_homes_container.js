import { connect } from 'react-redux';
import FeaturedMiddleLayer from './featured_middle_layer';
import * as selector from '../../reducers/selectors';
import { fetchFeaturedSpots } from '../../actions/spot_actions';

const mapStateToProps = (state) => {
  return({
  non_home_spots: selector.selectFeaturedNonHomes(state),
  home_spots: selector.selectFeaturedHomes(state),
  fancy_home_spots: selector.selectFeaturedFancyHomes(state),
  loading: state.loading
  });
};

const mapDispatchToProps = dispatch => ({
  fetchFeaturedSpots: () => dispatch(fetchFeaturedSpots()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedMiddleLayer);
