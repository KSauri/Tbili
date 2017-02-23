import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BookingReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spot_review: "",
      spot_review_star_count: 1,
      booking_id: this.props.booking.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateReview = this.updateReview.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewReview(this.state);
    this.setState({ spot_review: "", spot_review_star_count: 1 });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.booking === undefined && nextProps.booking !== undefined) {
      this.setState({ booking_id: nextProps.booking.id });
    }
  }


  updateStar(rating) {
    return e => {
      return this.setState({ spot_review_star_count: rating });
    };
  }

  updateReview(e) {
    this.setState({ spot_review: e.target.value });
  }

  render() {
    return (<div className="review-form">
      <section className="flex-column">
        <h3>Leave a Review of your stay</h3>
        <form onSubmit={ this.handleSubmit } className="flex-column">
          <div className="flex-column">
            <input type="hidden" value={ this.state.spot_review_star_count } />
            <div className="flex-row">
              <i className={this.state.spot_review_star_count > 0 ? "fa fa-star star" : "fa fa-star star-unselected" }
                onClick={this.updateStar(1) }
                aria-hidden="true"></i>
              <i className={this.state.spot_review_star_count > 1 ? "fa fa-star star" : "fa fa-star star-unselected" }
                onClick={this.updateStar(2) }
                aria-hidden="true"></i>
              <i className={this.state.spot_review_star_count > 2 ? "fa fa-star star" : "fa fa-star star-unselected" }
                onClick={this.updateStar(3) }
                aria-hidden="true"></i>
              <i className={this.state.spot_review_star_count > 3 ? "fa fa-star star" : "fa fa-star star-unselected" }
                onClick={this.updateStar(4) }
                aria-hidden="true"></i>
              <i className={this.state.spot_review_star_count > 4 ? "fa fa-star star" : "fa fa-star star-unselected" }
                onClick={this.updateStar(5) }
                aria-hidden="true"></i>
            </div>
          </div>
          <div className="flex-column review-body">
            <label>Tell us about your time at { this.props.host }'s Place</label>
            <textarea className="review-text" value={ this.state.spot_review } onChange={ this.updateReview }></textarea>
            <input type="submit" value="Leave your review" />
          </div>
        </form>
      </section>
    </div>);
  }
}

export default withRouter(BookingReviewForm);


// <input type="radio"
//   checked={ this.state.spot_review_star_count - 2 }
//   value={ this.state.star3 }
//   onChange={ this.updateRadio("star3") }/>
