import React from 'react';
import Rheostat from 'rheostat';

export default class UpdateNondateFilters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guest_no: this.props.filters.guest_no,
      shared_room: this.props.filters.shared_room,
      private_room: this.props.filters.private_room,
      full_home: this.props.filters.full_home,
      price_min: 0
    };
    this.changeFilters = this.changeFilters.bind(this);
    this.priceChange = this.priceChange.bind(this);
  }

  changeFilters(e) {
    e.preventDefault();
    this.props.receiveSearchFilters(this.state);
  }

  priceChange() {
    debugger
  }

  handleFilterChange(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  handleCheckboxChange(field) {
    return (e) => this.setState({ [field]: !this.state[field] });
  }

  render() {
    return (
      <form className="nondate-filter-form" onSubmit={ this.changeFilters }>
        <input className="guest-no-input" type="number" min="1" max="16" value={this.state.guest_no } onChange={this.handleFilterChange("guest_no")}/>
        <div className="room-type">
          <label className="room-label">Full Home
            <input type="checkbox"
              className="room-checkbox"
              checked={ this.state.full_home }
              value={ this.state.full_home }
              onClick={this.handleCheckboxChange("full_home")}/>
          </label>
          <label className="room-label">Private Room
            <input type="checkbox"
              className="room-checkbox"
              checked={ this.state.private_room }
              value={ this.state.private_room }
              onClick={this.handleCheckboxChange("private_room")}/>
          </label>
          <label className="room-label">Shared Room
          <input type="checkbox"
            className="room-checkbox"
            checked={ this.state.shared_room }
            value={ this.state.shared_room }
            onClick={this.handleCheckboxChange("shared_room")}/>
          </label>
        </div>
        <div className="price-filter-container">
          <label className="price-range-label">Price Range</label>
          <div className="rheostat-container">
            <Rheostat min={1} max={800}  values={[1,800]} onChange={ this.priceChange }/>
          </div>
        </div>
        <input type="submit" value="update filters" />
      </form>
    );
  }

}
