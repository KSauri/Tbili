import React, { Component } from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';
import ErrorList from '../../auth_forms/error_list';

class BookingForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start_date: "",
      end_date: "",
      guest_number: 1,
      spot_id: this.props.params.spotId,
      formVisible: false
    };
    this.checkHeight = this.checkHeight.bind(this);
    this.submitBooking = this.submitBooking.bind(this);
  }

  update(field) {
    return e => {
      return this.setState({ [field]: e.currentTarget.value });
    };
  }

  scrollListener() {
    window.addEventListener("scroll", this.checkHeight);
  }

  componentDidMount() {
    this.scrollListener();
  }


  checkHeight(cb) {
    if(window.scrollY > 770 && window.scrollY < (document.getElementById("spot-show").scrollHeight - 1260)) {
      this.setState({ formVisible: true });
    } else if (window.scrollY > (document.getElementById("spot-show").scrollHeight - 1260)) {
      this.state.formVisible && this.setState({ formVisible: "atMap" });
    } else {
      this.state.formVisible && this.setState({ formVisible: false });
    }
    console.log(window.scrollY);
  }


  submitBooking(e) {
    e.preventDefault();
    if (this.props.currentUser === null) {
      this.props.showFormModal("logIn");
    } else {
      this.props.createNewBooking({ start_date: this.state.start_date,
        end_date: this.state.end_date,
        guest_number: this.state.guest_number,
        spot_id: this.state.spot_id}).
        then(() => this.props.clearBookingErrors())
        .then(() => this.props.router.push("/trips"));
    }
  }

  componentWillUnmount() {
    this.props.clearBookingErrors();
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

  today(){
    Date.prototype.yyyymmdd = function() {
      var mm = this.getMonth() + 1; // getMonth() is zero-based
      var dd = this.getDate();

    return [this.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
        ].join('-');
    };

    var date = new Date();
    return date.yyyymmdd();
    }

  nextDay(date) {
    let day = moment(date);
    let next = day.add(1, 'days');
    return next.format("YYYY-MM-DD");
  }

  render() {

    return (<div className={ `booking-form flex-column ${this.state.formVisible ? "following" : ""}`}
        style={ this.state.formVisible === "atMap" ? { top: `${((document.getElementById("spot-show").scrollHeight) - 1260) - window.scrollY}px` } : {}} >
      <section className="price-header flex-row">
        <h3>${this.props.price}</h3>
        <h4>Per Night</h4>
      </section>
      <section className="flex-column">
        <form onSubmit={this.submitBooking} className="booking-form-form">
          <div className="two-dates flex-row">
            <div className="date-col-form flex-column">
              <h4>Check In</h4>
              <input className="date-input-show" type="date"
                value={this.state.start_date}
                min={ this.today() }
                onChange={ this.update("start_date") } />
            </div>
            <div className="date-col-form flex-column">
              <h4>Check Out</h4>
              <input className="date-input-show" type="date"
                min={ this.nextDay(this.state.start_date) }
                value={this.state.end_date}
                onChange={ this.update("end_date") } />
            </div>
          </div>
          <div className="guest-number-form flex-column">
            <h4>Guests</h4>
            <input className="date-input-show" type="number"
              min="1"
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
        <div className="booking-errors">
          <ErrorList  errors={this.props.errors.booking} />
        </div>
      </section>
    </div>);
  }
}

export default withRouter(BookingForm);
