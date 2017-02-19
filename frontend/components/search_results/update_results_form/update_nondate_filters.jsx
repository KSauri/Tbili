import React from 'react';
import Rheostat from 'rheostat';

export default class UpdateNondateFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guest_no: this.props.filters.guest_no,
      shared_room: this.props.filters.shared_room,
      private_room: this.props.filters.private_room,
      full_home: this.props.filters.full_home
    };
    this.changeFilters = this.changeFilters.bind(this);
  }

  changeFilters(e) {
    e.preventDefault();
    this.props.receiveSearchFilters(this.state);
  }

  handleFilterChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleCheckboxChange(field) {
    return (e) => this.setState({ [field]: !this.state[field] });
  }

  render() {
    return (
      <form onSubmit={ this.changeFilters }>
        <input type="number" min="1" max="16" value={this.state.guest_no } onChange={this.handleFilterChange("guest_no")}/>
        <input type="checkbox"
          checked={ this.state.full_home }
          value={ this.state.full_home }
          onClick={this.handleCheckboxChange("full_home")}/>
        <input type="checkbox"
          checked={ this.state.private_room }
          value={ this.state.private_room }
          onClick={this.handleCheckboxChange("private_room")}/>
        <input type="checkbox"
          checked={ this.state.shared_room }
          value={ this.state.shared_room }
          onClick={this.handleCheckboxChange("shared_room")}/>
        <div className="rheostat-container">
          <Rheostat min={1} max={800} values={[1,800]} />
        </div>
        <input type="submit" value="update filters" />
      </form>
    );
  }

}
