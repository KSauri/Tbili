import { connect } from 'react-redux';
import SearchResults from './search_results';
import { selectSpotsFromState } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const startDate = ownProps.params.startDate || "";
  const endDate = ownProps.params.endDate || "";
  return {
    spots: selectSpotsFromState(state),
    address: ownProps.params.address,
    startDate,
    endDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBounds: (bounds) => dispatch(updateBounds(bounds)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
