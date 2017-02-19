import React from 'react';


export default class update_nondate_filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters
    };
  }

  changeFilters(e) {
    e.preventDefault();
    this.props.receiveSearchFilters(this.state);
  }

  handleFilterChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    return (
      <form onSubmit={ this.changeFilters }>
        <input type="number" min="1" max="16" value={this.state.guest_no } onChange={this.handleFilterChange("guest_no")}/>
        <input type="checkbox" value={this.state.full_home } onChange={this.handleFilterChange("full_home")}/>
        <input type="checkbox" value={this.state.private_room } onChange={this.handleFilterChange("private_room")}/>
        <input type="checkbox" value={this.state.shared_room } onChange={this.submihandleFilterChangetForm("shared_room")}/>
      </form>
    );
  }

}
