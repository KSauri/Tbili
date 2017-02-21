import React from 'react';


export default class UpdateDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: this.props.dates.start_date,
      end_date: this.props.dates.end_date
    };
    this.updateDates = this.updateDates.bind(this);
  }

  updateDates(e) {
    e.preventDefault();
    this.props.fetchSearchSpots({
      bounds: this.props.bounds,
      start_date: this.state.start_date,
      end_date: this.state.end_date}
    );
  }

  changeDate(field) {
    return (e) => {
      return this.setState({ [field]: e.currentTarget.value });};
  }

  render() {
    return (
      <form className="date-form" onSubmit={ this.updateDates }>
        <label className="date-label">Dates
          <input className="date-input" type="date" min={ new Date() } onChange={this.changeDate("start_date")}/>
          <input className="date-input" type="date"  onChange={this.changeDate("end_date")}/>
          <input className="date-btn"  type="submit" value="Change Dates" />
        </label>
      </form>
    );
  }

}
