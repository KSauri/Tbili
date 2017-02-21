import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SpotProperties extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <main className="spot-properties">
      <hgroup>
        <h1>Overview</h1>
      </hgroup>
      <div className="general-spot-info flex-row">
        <div className="host-img-container">
          <img className="host-img" />
        </div>
        <div>
          <h1>SPOT NAME</h1>
          <div className="flex-row">
            <div className="flex-column">
              <i className="fa fa-home" aria-hidden="true"></i>
              <h3>SPOT PROPERTY TYPE</h3>
            </div>
            <div className="flex-column">
              <i className="fa fa-users" aria-hidden="true"></i>
              <h3>GUEST #</h3>
            </div>
            <div className="flex-column">
              <i className="fa fa-bed" aria-hidden="true"></i>
              <h3>BED #</h3>
            </div>
          </div>
        </div>
        <div>
          <h2>About this listing</h2>
          <p>SPOT DESCRIPTION</p>
          <div className="the-space flex-row">
            <h3>The space</h3>
            <hgroup className="flex-column">
              <div className="flex-row">
                <h4>Accomodates: </h4>
                <h4>SPOT GUEST LIMIT</h4>
              </div>
              <div className="flex-row">
                <h4>Bathrooms: </h4>
                <h4>SPOT BATHROOM NUMBER</h4>
              </div>
            </hgroup>
            <hgroup className="flex-column">
              <div className="flex-row">
                <h4>Bedrooms: </h4>
                <h4>SPOT BED NUMBER</h4>
              </div>
              <div className="flex-row">
                <h4>Property type: </h4>
                <h4>SPOT PROPERTY TYPE</h4>
              </div>
            </hgroup>
          </div>
          <div className="amenities flex-row">
            <h3>Amenities</h3>
            <hgroup className="flex-column" >
              <div className="flex-row">
                <i className="fa fa-paw" aria-hidden="true"></i>
                <h4>Pets allowed</h4>
              </div>
              <div className="flex-row">
                <img className="kitchen" />
                <i className="fa fa-cutlery" aria-hidden="true"></i>
              </div>
            </hgroup>
            <hgroup className="flex-column" >
              <div className="flex-row">
                <i className="fa fa-wifi" aria-hidden="true"></i>
                <h4>Wireless Internet</h4>
              </div>
              <div className="flex-row">
                <i className="fa fa-child" aria-hidden="true"></i>
                <h4>Family/kid friendly</h4>
              </div>
            </hgroup>
          </div>
          <div className="Prices flex-row">
            <h3>Prices</h3>
            <hgroup className="flex-column" >
              <div className="flex-row">
                <h4>Weekly discount: </h4>
                <h4>SPOT WEEKLY DISCOUNT</h4>
              </div>
              <div className="flex-row">
                <h4>Monthly Discount: </h4>
                <h4>SPOT MONTHLY DISCOUNT</h4>
              </div>
            </hgroup>
            <hgroup className="flex-column" >
              <div className="flex-row">
                <h4>Cancellation: </h4>
                <h4>SPOT CANCELLATION</h4>
              </div>
              <div className="flex-row">
                <h4>Minimum stay: </h4>
                <h4>SPOT MINIMUM STAY</h4>
              </div>
            </hgroup>
          </div>
        </div>
      </div>


    </main>);
  }
}

export default SpotProperties;
