import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { fetchBoundaries, parseBoundaries } from "../../util/search_api_util";
import { render } from 'react-dom';
import moment from 'moment';
import ErrorList from '../auth_forms/error_list';


class HomeSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: this.props.address,
      start_date: this.today(),
      end_date: this.nextDay(this.today()),
      guest_no: 1
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    if (this.state.address === "") {
      this.props.fetchSearchSpots({
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        guest_no: this.state.guest_no,
        }
      ).then(() => this.props.router.push("/search"));
    } else {
      fetchBoundaries(this.state.address)
      .then(rawBounds => {
        if (rawBounds.status !== "ZERO_RESULTS" &&
          !!rawBounds.results[0].geometry.bounds) {
          return parseBoundaries(rawBounds);
        } else {
          return ({ address: "Earth?",
          viewport: { northEast: { lat: 70, lng: -50 }, southWest: { lat: 5, lng: -170 }},
          center_lat: 54.5259614,
          center_lng: -105.2551187,
          northEast:
          { lat: 83.97025599999999,
            lng: -8.2617197 },
          southWest:
            { lat: 5.496099999999999,
              lng: 170.5957} }
          );}})
      .then(parsedBounds => this.props.fetchSearchSpots(
        {bounds: parsedBounds,
          start_date: this.state.start_date,
          end_date: this.state.end_date,
          guest_no: this.state.guest_no}
        )
      ).then(() => this.props.router.push("/search"));
    }
  }




  componentWillUnmount() {
    this.props.clearSpotErrors();
  }

  changeInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  getDays() {
    if (this.state.start_date === "" || this.state.end_date === "") {
      return null;
    } else {
      let one_day=1000*60*60*24;
      let date1_ms = new Date(this.state.start_date).getTime();
      let date2_ms = new Date(this.state.end_date).getTime();
      let difference_ms = date2_ms - date1_ms;
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
    return (
      <div className="unfinished">
        <div className="search home-search">
          <img src={window.search} className="search-icon" />
          <form className="home-search-bar" onSubmit={ this.submitForm }>
            <label className="">
              Where
              <ErrorList errors={ this.props.errors.spot_errors } />
              <input value={this.state.address}
                placeholder="City"
                onChange={this.changeInput("address")}/>
            </label>
            <label >
              When
              <div className="home-search-date">
                <input
                  placeholder="Check in"
                  type="date"
                  min={ this.today() }
                  value={ this.state.start_date }
                  onChange={this.changeInput("start_date")}/>
                <input
                  placeholder="Check out"
                  type="date"
                  min={ this.nextDay(this.state.start_date) }
                  value={ this.state.end_date }
                  onChange={this.changeInput("end_date")} />
              </div>
            </label>
            <label className="home-search-input">
              <div className="flex-column">
                Number of Guests
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={this.state.guest_no}
                  placeholder="Number of guests"
                  onChange={this.changeInput("guest_no")}/>
              </div>
              <input className="search-submit" value="Search" type="submit" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeSearchBar);
