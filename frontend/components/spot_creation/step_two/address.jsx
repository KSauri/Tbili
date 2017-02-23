import React from 'react';
import { fetchBoundaries, parseBoundaries } from "../../../util/search_api_util";
import AddressMap from './address_map';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "",
      currBounds: {} };
    this.submitAddress = this.submitAddress.bind(this);
    this.updateBounds = this.updateBounds.bind(this);
  }

  submitAddress() {
    fetchBoundaries(this.state.address)
    .then(rawBounds => parseBoundaries(rawBounds))
    .then(parsedBounds => {
      this.props.submitStepThree({lat: parsedBounds.center_lat,
        lng: parsedBounds.center_lng});
      });
    }

  updateBounds() {
    fetchBoundaries(this.state.address)
    .then(rawBounds => parseBoundaries(rawBounds))
    .then(parsedBounds => {
      this.setState({ currBounds: { lat: parsedBounds.center_lat,
        lng: parsedBounds.center_lng}});
    });
  }

  update() {
    return e => {
      return this.setState({ address: e.currentTarget.value });
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.submitAddress }>
          <label>Address: </label>
          <input type="text" value={this.state.address}
            onChange={ this.update() }/>
        </form>
        <button onClick={ this.updateBounds }>Check your address</button>
        <AddressMap currBounds={ this.state.currBounds }/>
      </div>
    );
  }
}

export default Address;
