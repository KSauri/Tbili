import { connect } from 'react-redux';
import SpotImage from './spot_img_holder';


const mapStateToProps = (state) => {
  debugger
  return { img: state.spot.image,
  loading: state.loading };
};

const mapDispatchToProps = dispatch => {
};

export default connect(
  mapStateToProps,
  null
)(SpotImage);
