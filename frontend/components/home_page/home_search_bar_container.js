import { connect } from 'react-redux';
import HomeSearchBar from './home_search_bar';
import { fetchSpots } from '../../actions/spot_actions';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => {
  return ({
    fetchSpots: (spots) => dispatch(fetchSpots(spots))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSearchBar);
