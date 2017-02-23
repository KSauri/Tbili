import React, { Component } from 'react';
import { withRouter } from 'react-router';

class FormStepOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      price: 0,
      description: "",
      guest_limit: 16,
      bed_number: 1,
      bathroom_number: 1,
      property_type: "full home",
      pets_allowed: true,
      wireless_internet: true,
      kitchen: true,
      family_friendly: true,
      monthly_discount: 0,
      weekly_discount: 0,
      cancellation_policy: "strict",
      minimum_stay: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitStepOne(this.state);
  }

  updateRadio(field) {
    return e => {
      return this.setState({ [field]: !this.state[field] });
    };
  }

  update(field) {
    return e => {
      return this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    return (
    <div className="step-one">
      <div className="flex-row progress-holder">
        <div className="step-one-progress"></div>
        <div className="step-one-unprogress"></div>
      </div>
      <div className="step-one-form-img-holder flex-row">
        <div className="step-one-form">
          <h3>Tell us about your space</h3>
          <form className="flex-column" onSubmit={ this.handleSubmit }>
            <div className="flex-column">
              <label>Name </label>
              <input className="new-spot-text" type="text"
                required
                value={ this.state.name }
                onChange={ this.update("name") }/>
            </div>
            <div className="flex-column">
              <label>Neighborhood </label>
              <input className="new-spot-text" type="text"
                required
                value={ this.state.location }
                onChange={ this.update("location") }/>
            </div>
            <div className="flex-column">
              <label>Price  $</label>
              <input type="number"
                min="0"
                max="800"
                value={ this.state.price }
                onChange={ this.update("price") }/>
            </div>
            <div className="flex-column">
              <label>Guest limit </label>
              <input type="number"
                min="0"
                max="16"
                value={ this.state.guest_limit }
                onChange={ this.update("guest_limit") }/>
            </div>
            <div className="flex-column">
              <label>Number of beds </label>
              <input type="number"
                min="0"
                max="20"
                value={ this.state.bed_number }
                onChange={ this.update("bed_number") }/>
            </div>
            <div className="flex-column">
              <label>Number of bathrooms </label>
              <input type="number"
                max="30"
                min="0"
                value={ this.state.bathroom_number }
                onChange={ this.update("bathroom_number") }/>
            </div>
            <div className="flex-column">
              <label>Property type </label>
              <select value={this.state.property_type} onChange={this.update("property_type")}>
                <option value="full home">Full home</option>
                <option value="private room">Private Room</option>
                <option value="shared room">Shared room</option>
              </select>
            </div>
            <div className="step-one-radio flex-row">
              <label>Allow pets </label>
              <input type="radio"
                checked={ this.state.pets_allowed }
                value={ this.state.pets_allowed }
                onChange={ this.updateRadio("pets_allowed") }/>
            </div>
            <div className="step-one-radio flex-row">
              <label>Wireless internet </label>
              <input type="radio"
                checked={ this.state.wireless_internet }
                value={ this.state.wireless_internet }
                onChange={ this.updateRadio("wireless_internet") }/>
            </div>
            <div className="step-one-radio flex-row">
              <label>Kitchen access </label>
              <input type="radio"
                checked={ this.state.kitchen }
                value={ this.state.kitchen }
                onChange={ this.updateRadio("kitchen") }/>
            </div>
            <div className="step-one-radio flex-row">
              <label>Family friendly </label>
              <input type="radio"
                checked={ this.state.family_friendly }
                value={ this.state.family_friendly }
                onChange={ this.updateRadio("family_friendly") }/>
            </div>
            <div className="flex-column">
              <label>Monthly discount </label>
              <input type="number"
                min="0"
                max="100"
                value={ this.state.monthly_discount }
                onChange={ this.update("monthly_discount") }/>
            </div>
            <div className="flex-column">
              <label>Weekly discount </label>
              <input type="number"
                min="0"
                max="100"
                value={ this.state.weekly_discount }
                onChange={ this.update("weekly_discount") }/>
            </div>
            <div className="flex-column">
              <label>Minimum stay (number of nights) </label>
              <input type="number"
                min="0"
                max="30"
                value={ this.state.minimum_stay }
                onChange={ this.update("minimum_stay") }/>
            </div>
            <div className="flex-column">
              <label>Description of your place </label>
              <textarea required value={ this.state.description } onChange={ this.update("description") }></textarea>
            </div>
            <input type="submit" value="Submit Details!" />
          </form>
        </div>
        <div className="step-one-img">
          <img src={window.tbilisi} className="tbilisi-img" />
        </div>
      </div>
    </div>);
  }
}

export default withRouter(FormStepOne);
