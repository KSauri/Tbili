import { connect } from 'react-redux';

import { fetchSearchSpots } from '../../../actions/search_actions';
// import { asArray } from '../../reducers/selectors';

import SearchMap from './map';

const mapStateToProps = state => ({
  bounds: state.filters.bounds
});

const mapDispatchToProps = dispatch => ({
  fetchSearchSpots: (filters) => dispatch(fetchSearchSpots(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchMap);
