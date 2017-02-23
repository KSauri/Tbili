import React, { Component } from 'react';
import { withRouter } from 'react-router';

class SpotProperties extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let properties = this.props.properties;
    return (
    <main className="spot-properties">
      <hgroup>
        <h1>Overview</h1>
      </hgroup>
      <div className="general-spot-info flex-row">
        <div className="host-img-container">
          <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png" className="host-img" />
          <p>{properties.host_f_name}</p>
        </div>
        <div className="overview-info-sub">
          <h1>{properties.name}</h1>
          <div className="overview-info flex-row">
            <div className="flex-column">
              <i className="fa fa-home" aria-hidden="true"></i>
              <h3>{ properties.property_type }</h3>
            </div>
            <div className="flex-column">
              <i className="fa fa-users" aria-hidden="true"></i>
              <h3>{ properties.guest_limit } Guests</h3>
            </div>
            <div className="flex-column">
              <i className="fa fa-bed" aria-hidden="true"></i>
              <h3>{ properties.bed_number } Beds</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="about-listing">
        <h2>About this listing</h2>
        <p className="spot-description-text">{ properties.description }</p>
        <div className="the-space flex-row">
          <h3 className="property-element">The space</h3>
          <div className="property-element flex-column">
            <div className="flex-row">
              <h4>Accomodates: </h4>
              <h4>{ properties.guest_limit }</h4>
            </div>
            <div className="flex-row">
              <h4>Bathrooms: </h4>
              <h4>{ properties.bathroom_number }</h4>
            </div>
          </div>
          <div className="property-element flex-column">
            <div className="flex-row">
              <h4>Bedrooms: </h4>
              <h4>{ properties.bed_number }</h4>
            </div>
            <div className="flex-row">
              <h4>Property type: </h4>
              <h4>{ properties.property_type }</h4>
            </div>
          </div>
        </div>
        <div className="amenities flex-row">
          <h3 className="property-element" >Amenities</h3>
          <div className="property-element flex-column" >
            <div className="flex-row">
              <i className="fa fa-paw" aria-hidden="true"></i>
              <h4>Pets allowed </h4>
            </div>
            <div className="flex-row">
              <i className="fa fa-cutlery" aria-hidden="true"></i>
              <h4>Kitchen </h4>
            </div>
          </div>
          <div className="property-element flex-column" >
            <div className="flex-row">
              <i className="fa fa-wifi" aria-hidden="true"></i>
              <h4>Wireless Internet </h4>
            </div>
            <div className="flex-row">
              <i className="fa fa-child" aria-hidden="true"></i>
              <h4>Family/kid friendly </h4>
            </div>
          </div>
        </div>
        <div className="prices flex-row">
          <h3 className="property-element">Prices</h3>
          <div className="property-element flex-column" >
            <div className="flex-row">
              <h4>Weekly discount: </h4>
              <h4>{ properties.weekly_discount }%</h4>
            </div>
            <div className="flex-row">
              <h4>Monthly Discount: </h4>
              <h4>{ properties.monthly_discount }%</h4>
            </div>
          </div>
          <div className="property-element flex-column" >
            <div className="flex-row">
              <h4>Cancellation: </h4>
              <h4>{ properties.cancellation_policy }</h4>
            </div>
            <div className="flex-row">
              <h4>Minimum stay: </h4>
              <h4>{ properties.minimum_stay }</h4>
            </div>
          </div>
        </div>
      </div>
    </main>);
  }
}

export default SpotProperties;
