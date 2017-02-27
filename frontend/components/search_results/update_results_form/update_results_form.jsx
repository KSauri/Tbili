import { withRouter } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import ErrorList from '../../auth_forms/error_list';
import UpdateDates from './update_dates';
import UpdateNondateFilters from './update_nondate_filters';

class UpdateResultsForm extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="search-form">
        <UpdateDates dates={ { start_date: this.props.filters.start_date,
                                end_date: this.props.filters.end_date } }
          bounds={ this.props.filters.bounds }
          fetchSearchSpots={ this.props.fetchSearchSpots } />
        <UpdateNondateFilters filters={ this.props.filters }
          receiveSearchFilters={ this.props.receiveSearchFilters } />
      </div>
    );
  }
}

export default withRouter(UpdateResultsForm);
