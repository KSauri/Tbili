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
      price_low: this.props.filters.price_low,
      price_high: this.props.filters.price_high
    };
    this.changeFilters = this.changeFilters.bind(this);
    this.priceChange = this.priceChange.bind(this);
  }

  changeFilters(e) {
    e.preventDefault();
    this.props.receiveSearchFilters(this.state);
  }


  componentDidMount() {
    this.price_min_button = document.querySelectorAll("button[data-handle-key='0']");
    this.price_max_button = document.querySelectorAll("button[data-handle-key='1']");
  }

  priceChange(e) {
    this.setState({ price_low: e.values[0], price_high: e.values[1] });
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
        <div className="guest-number-container">
          <label className="guest-number-label">Number of guests
            <input className="guest-no-input" type="number" min="1" max="16" value={this.state.guest_no } onChange={this.handleFilterChange("guest_no")}/>
          </label>
        </div>
        <div className="room-type">
          <label className="property-type-label">Property Type
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
          </label>
        </div>
        <div className="price-filter-container">
          <div className="curr-price-container">
            <span className="curr-price">Minimum Price: ${this.state.price_low}</span>
            <span className="curr-price">Maximum Price: ${this.state.price_high}</span>
          </div>
          <label className="price-range-label">Price Range
          <div className="rheostat-container">
            <Rheostat min={1} max={800}  values={[this.state.price_low, this.state.price_high]} onValuesUpdated={ this.priceChange }/>
          </div>
          </label>
        </div>
        <input className="filter-btn" type="submit" value="update filters" />
      </form>
    );
  }

}
