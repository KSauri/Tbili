import { connect } from 'react-redux';
import { selectSpotsFromState } from '../../../reducers/selectors';
import { fetchSearchSpots } from '../../../actions/search_actions';
// import { asArray } from '../../reducers/selectors';

import SearchMap from './map';

const mapStateToProps = state => ({
  bounds: state.filters.bounds,
  spots: selectSpotsFromState(state)
});

const mapDispatchToProps = dispatch => ({
  fetchSearchSpots: (filters) => dispatch(fetchSearchSpots(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMap);
