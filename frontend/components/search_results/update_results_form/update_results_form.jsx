import { withRouter } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import ErrorList from '../../auth_forms/error_list';

class UpdateResultsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.filters;
    this.submitForm = this.submitForm.bind(this);
    this.changeFilters = this.changeFilters.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    if (this.state.address === "") {
      this.props.fetchSearchSpots({
        bounds: this.props.bounds,
        start_date: this.state.start_date,
        end_date: this.state.end_date}
      );
    }
  }

  componentWillUnmount() {
    this.props.clearSpotErrors();
  }

  changeFilters(e) {
    e.preventDefault();
    this.props.receiveSearchFilters(this.state);
  }

  handleFilterChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  changeDate(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="search-result-form-container">
        <form onSubmit={ this.submitForm }>
          <input type="date" onChange={this.changeDate("start_date")}/>
          <input type="date" onChange={this.changeDate("end_Date")}/>
        </form>
        <form onSubmit={ this.changeFilters }>
          <input type="number" min="1" max="16" value={this.state.guest_no } onChange={this.handleFilterChange("guest_no")}/>
          <input type="checkbox" value={this.state.full_home } onChange={this.handleFilterChange("full_home")}/>
          <input type="checkbox" value={this.state.private_room } onChange={this.handleFilterChange("private_room")}/>
          <input type="checkbox" value={this.state.shared_room } onChange={this.submihandleFilterChangetForm("shared_room")}/>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateResultsForm);




// <input type="range" onChange={this.changeInput("price_range")}/> TODO umm fix price range

// does price range need to be a form? more of a filter... no wait it does need to be, what if you start with a lower price range
// then go up? you won't have those results anymore
// <form className="search-form" onSubmit={ this.submitForm }>
//   <input type="date" onChange={this.changeInput("start_date")}/>
//   <input type="date" onChange={this.changeInput("end_date")} />
//   <input value={this.state.guest_no}
//     onChange={this.changeInput("guest_no")}/>
//   <ErrorList errors={ this.props.errors.spot_errors } />
//   <input type="submit" />
// </form>
