import { connect } from 'react-redux';
import SpotProperties from './spot_properties';
import { selectSpotProperties } from '../../../reducers/selectors';


const mapStateToProps = (state) => {
  return { properties: selectSpotProperties(state) };
};

const mapDispatchToProps = dispatch => {
};

export default connect(
  mapStateToProps,
  null
)(SpotProperties);
