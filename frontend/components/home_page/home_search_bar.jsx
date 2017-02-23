import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { fetchBoundaries, parseBoundaries } from "../../util/search_api_util";
import { render } from 'react-dom';
import ErrorList from '../auth_forms/error_list';


class HomeSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      start_date: "",
      end_date: "",
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
      .then(rawBounds => parseBoundaries(rawBounds))
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

  render() {
    return (
      <div className="unfinished">
        <div className="search home-search">
          <img src={window.search} className="search-icon" />
          <form className="home-search-bar" onSubmit={ this.submitForm }>
            <ErrorList errors={ this.props.errors.spot_errors } />
            <label className="">
              Where
              <input  value={this.state.address}
                placeholder="Destination, city, place"
                onChange={this.changeInput("address")}/>
            </label>
            <label >
              When
              <div className="home-search-date">
                <input
                  placeholder="Check in"
                  type="date"
                  onChange={this.changeInput("start_date")}/>
                <input
                  placeholder="Check out"
                  type="date"
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
