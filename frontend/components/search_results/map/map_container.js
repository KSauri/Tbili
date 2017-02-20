import { connect } from 'react-redux';
import { selectFilteredSpotsFromState } from '../../../reducers/selectors';
import { fetchSearchSpots } from '../../../actions/search_actions';
// import { asArray } from '../../reducers/selectors';

import SearchMap from './map';

const mapStateToProps = (state, ownProps) => {
  return ({ bounds: state.filters.bounds,
  spots: selectFilteredSpotsFromState(state)});
};

const mapDispatchToProps = dispatch => ({
  fetchSearchSpots: (filters) => dispatch(fetchSearchSpots(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMap);
