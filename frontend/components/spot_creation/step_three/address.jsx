import React from 'react';
import { fetchBoundaries, parseBoundaries } from "../../../util/search_api_util";
import AddressMap from './address_map';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "",
      currBounds: {},
      errors: "" };
    this.submitAddress = this.submitAddress.bind(this);
    this.updateBounds = this.updateBounds.bind(this);
  }

  submitAddress(e) {
    e.preventDefault();
    fetchBoundaries(this.state.address)
    .then(rawBounds => parseBoundaries(rawBounds))
    .then(parsedBounds => {
      this.props.submitStepThree({lat: parsedBounds.center_lat,
        lng: parsedBounds.center_lng});
      });
    }

  updateBounds() {
    fetchBoundaries(this.state.address)
    .then(rawBounds =>
      {
        if (rawBounds.status !== "ZERO_RESULTS" &&
          !!rawBounds.results[0].geometry.bounds) {
            this.setState({ errors: "" });
          return parseBoundaries(rawBounds); }
          else {
            this.setState({ errors: "Sorry, we could not find that address." });
            return "FAIL";
          }
      })
    .then(parsedBounds => {
      if (parsedBounds === "FAIL") {
        console.log("Google couldn't find that place.  What were you thinking?");
      } else {
        this.setState({ currBounds: { lat: parsedBounds.center_lat,
          lng: parsedBounds.center_lng}});
      }
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
      <div className="flex-row progress-holder">
        <div className="step-three-progress"></div>
        <div className="step-three-unprogress"></div>
      </div>
      <div className= "address-container flex-column">
        <div className="address-form-container">
          <form className="address-form flex-column" onSubmit={ this.submitAddress }>
            <label>Address: </label>
            <input type="text" value={this.state.address}
              onChange={ this.update() }/>
            { this.state.currBounds.hasOwnProperty("lat") ? <input type="submit" value="Add your spot!"/>  : null }
          </form>
          <button className="address-check-btn" onClick={ this.updateBounds }>Check your address</button>
        </div>
        <span className="spot-create-map-error">{ this.state.errors !== "" ? this.state.errors: null }</span>
        <AddressMap currBounds={ this.state.currBounds }/>
      </div>
    </div>
    );
  }
}

export default Address;
