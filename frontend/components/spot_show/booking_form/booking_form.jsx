import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: "",
      end_date: "",
      guest_number: 1
    };
  }

  update(field) {
    return e => {
      return this.setState({ [field]: e.currentTarget.value });
    };
  }

  getDays() {
    if (this.state.start_date === "" || this.state.end_date === "") {
      return null;
    } else {
      var one_day=1000*60*60*24;
      var date1_ms = new Date(this.state.start_date).getTime();
      var date2_ms = new Date(this.state.end_date).getTime();
      var difference_ms = date2_ms - date1_ms;
      return Math.round(difference_ms/one_day);
    }
  }

  render() {
    return (<div className="booking-form flex-column">
      <section className="price-header flex-row">
        <h3>${this.props.price}</h3>
        <h4>Per Night</h4>
      </section>
      <section className="flex-column">
        <form className="booking-form-form">
          <div className="two-dates flex-row">
            <div className="date-col-form flex-column">
              <h4>Check In</h4>
              <input className="date-input-show" type="date"
                value={this.state.start_date}
                onChange={ this.update("start_date") } />
            </div>
            <div className="flex-column">
              <h4>Check Out</h4>
              <input className="date-input-show" type="date"
                value={this.state.end_date}
                onChange={ this.update("end_date") } />
            </div>
          </div>
          <div className="guest-number-form flex-column">
            <h4>Guests</h4>
            <input className="date-input-show" type="number"
              value={this.state.guest_number}
              onChange={ this.update("guest_number") } />
          </div>
          <section className="monies flex-column">
            <div className="flex-column">
              <h4>${this.props.price} x { this.getDays() || "0" }</h4>
              <h4>$ { this.props.price * this.getDays() }</h4>
            </div>
          </section>
          <input className="booking-submit" type="submit" value="Request to Book" />
        </form>
      </section>
    </div>);
  }
}

export default withRouter(BookingForm);
