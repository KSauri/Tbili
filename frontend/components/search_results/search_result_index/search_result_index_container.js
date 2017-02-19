import { connect } from 'react-redux';
import { selectFilteredSpotsFromState } from '../../../reducers/selectors';
import SearchResultIndex from './search_result_index';

const mapStateToProps = (state) => {
  return({
    spots: selectFilteredSpotsFromState(state)
  });
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultIndex);
