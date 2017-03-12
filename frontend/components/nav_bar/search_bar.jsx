import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { fetchBoundaries, parseBoundaries } from "../../util/search_api_util";


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    fetchBoundaries(this.state.address)
    .then(rawBounds => {
      if (rawBounds.status !== "ZERO_RESULTS" &&
        !!rawBounds.results[0].geometry.bounds) {
        return parseBoundaries(rawBounds);
      } else {
        return ({ address: "North America",
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
        start_date: "",
        end_date: ""}
      )
    ).then(() => this.props.router.push("/search"));
  }



  componentWillUnmount() {
    this.props.clearSpotErrors();
  }

  changeInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="nav-search-bar-container">
        <img src={window.search} className="search-icon" />
        <form className="search-form" onSubmit={ this.submitForm }>
          <input
            className="nav-search-bar"
            value={this.state.address}
            placeholder="Destination, city, place"
            onChange={this.changeInput("address")}/>
        </form>
      </div>
    );
  }
}

export default withRouter(SearchBar);
