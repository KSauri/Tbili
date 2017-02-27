import { connect } from 'react-redux';
import { selectFilteredSpotsFromState } from '../../../reducers/selectors';
import { fetchSpot } from '../../../actions/search_actions';
import { withRouter } from 'react-router';

import SpotMap from './map';




export default withRouter(connect(
  null,
  null
)(SpotMap));
