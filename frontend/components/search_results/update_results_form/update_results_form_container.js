import { connect } from 'react-redux';
import UpdateResultsForm from './update_results_form';
import { clearSpotErrors } from '../../../actions/spot_actions';
import { fetchSearchSpots, receiveSearchFilters } from '../../../actions/search_actions';

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    errors: state.spots.errors };
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchSearchSpots: (filters) => dispatch(fetchSearchSpots(filters)),
    clearSpotErrors: () => dispatch(clearSpotErrors()),
    receiveSearchFilters: (filters) => dispatch(receiveSearchFilters(filters))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateResultsForm);
