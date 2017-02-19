import { connect } from 'react-redux';
import { selectSpotsFromState } from '../../../reducers/selectors';
import SearchResultIndex from './search_result_index';

const mapStateToProps = (state) => {
  return({
    spots: selectSpotsFromState(state)
  });
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResultIndex);
