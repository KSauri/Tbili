import { Link } from 'react-router';
import { connect } from 'react-redux';
import SpotShow from './spot_show';
import { fetchSpot } from '../../actions/spot_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    spot: state.spot
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSpot: (spotId) => dispatch(fetchSpot(spotId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotShow);
