import { createSpot } from '../../actions/spot_actions';
import { connect } from 'react-redux';
import ParentForm from './parent_form';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.spot_create
  };
};

const mapDispatchToProps = dispatch => {
  return { createSpot: spot => dispatch(createSpot(spot)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParentForm);
