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
    .then(rawBounds => parseBoundaries(rawBounds))
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
