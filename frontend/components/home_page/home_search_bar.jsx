import React, {Component} from 'react';
import withRouter from 'react-router';
import { fetchBoundaries, parseBoundaries } from "../../util/search_api_util";
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once





export default class HomeSearchBar extends Component {
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
    fetchBoundaries(this.state.address)
      .then(rawBounds => parseBoundaries(rawBounds))
      .then(parsedBounds => this.props.fetchSpots(
        {bounds: parsedBounds,
        start_date: this.state.start_date,
        end_date: this.state.end_date,
        guest_no: this.state.guest_no}
        )
      );
  }

  changeInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    var today = new Date();
    var minDate = Number(new Date()) - (24*60*60*1000) * 7;
    return (
      <div className="unfinished">
        <div className="search home-search">
          <img src={window.search} className="search-icon" />
          <form className="search-form" onSubmit={ this.submitForm }>
            <input value={this.state.address}
              placeholder="Destination, city, place"
              onChange={this.changeInput("address")}/>
            <div className="calendar-container">
              <InfiniteCalendar
                width={400}
                height={600}
                selectedDate={today}
                disabledDays={[0,6]}
                minDate={minDate}
                keyboardSupport={true}
              />,
            </div>
            <input value={this.state.guest_no}
              onChange={this.changeInput("address")}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}


// = (props) => (<div className="unfinished">
//   <div className="search home-search">
//     <img src={window.search} className="search-icon" />
//     <form>
//       <input/>
//     </form>
//   </div>
// </div>);



// handle submit sends off the
// request to get the lat long
// then, when it returns it
// submits the form



// <span className="search-bar-text">Search Bar Holder</span>
