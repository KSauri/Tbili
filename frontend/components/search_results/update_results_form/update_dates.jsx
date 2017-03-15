import React from 'react';
import moment from 'moment';

export default class UpdateDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: this.props.dates.start_date || this.today(),
      end_date: this.establishEndDate(this.props.dates.start_date, this.props.dates.end_date)
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

  establishEndDate(start,end) {
    if (start && end === "") {
      return this.nextDay(start);
    } else if (end) {
      return end;
    } else {
      return this.nextDay(this.today());
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
      <form className="date-form" onSubmit={ this.updateDates }>
        <label className="date-label">Dates
          <input className="date-input"
            type="date"
            min={ this.today() }
            value={ this.state.start_date }
            onChange={this.changeDate("start_date")}/>
          <input className="date-input"
            type="date"
            value={ this.state.end_date }
            min={ this.nextDay(this.state.start_date) }
            onChange={this.changeDate("end_date")}/>
          <input className="date-btn"  type="submit" value="Change Dates" />
        </label>
      </form>
    );
  }

}
