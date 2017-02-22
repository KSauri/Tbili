import React from 'react';
import { fetchBoundaries, parseBoundaries } from "../../../util/search_api_util";

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
    this.submitAddress = this.submitAddress.bind(this);
  }

  submitAddress() {
    fetchBoundaries(this.state.address)
    .then(rawBounds => parseBoundaries(rawBounds))
    .then(parsedBounds => {
      this.props.submitStepThree({lat: parsedBounds.center_lat,
        lng: parsedBounds.center_lng});
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
      </div>
    );
  }
}

export default Address;
