import { connect } from 'react-redux';
import SpotImage from './spot_img_holder';


const mapStateToProps = (state) => {
  return { img: state.spot.image };
};

const mapDispatchToProps = dispatch => {
};

export default connect(
  mapStateToProps,
  null
)(SpotImage);
