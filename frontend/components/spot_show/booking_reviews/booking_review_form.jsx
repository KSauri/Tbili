import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BookingReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
      stars: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateReview = this.updateReview.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let response = { id: this.props.params.spotId };
    let sum = (star1, star2) => star1 + star2;
    let s = this.state;
    response.spot_review_star_count = [s.star1, s.star2, s.star3, s.star4, s.star5].reduce(sum);
    response.spot_review = s.review;
    this.props.createNewReview(response);
  }



  updateStar(rating) {
    return e => {
      return this.setState({ stars: rating });
    };
  }

  updateReview(e) {
    this.setState({ review: e.target.value });
  }

  render() {
    return (<div className="review-form">
      <section className="flex-column">
        <h3>Leave a Review of your stay</h3>
        <form onSubmit={ this.handleSubmit } className="flex-column">
          <div className="flex-column">
            <input type="hidden" value={ this.state.stars } />
            <div className="flex-row">
              <i className={this.state.stars > 0 ? "fa fa-star star" : "fa fa-star star-unselected" }
                onClick={this.updateStar(1) }
                aria-hidden="true"></i>
              <i className={this.state.stars > 1 ? "fa fa-star star" : "fa fa-star star-unselected" }
                onClick={this.updateStar(2) }
                aria-hidden="true"></i>
              <i className={this.state.stars > 2 ? "fa fa-star star" : "fa fa-star star-unselected" }
                onClick={this.updateStar(3) }
                aria-hidden="true"></i>
              <i className={this.state.stars > 3 ? "fa fa-star star" : "fa fa-star star-unselected" }
                onClick={this.updateStar(4) }
                aria-hidden="true"></i>
              <i className={this.state.stars > 4 ? "fa fa-star star" : "fa fa-star star-unselected" }
                onClick={this.updateStar(5) }
                aria-hidden="true"></i>
            </div>
          </div>
          <div className="flex-column review-body">
            <label>Tell us about your time with { this.props.host }</label>
            <textarea className="review-text" value={ this.state.review } onChange={ this.updateReview }></textarea>
            <input type="submit" value="Leave your review" />
          </div>
        </form>
      </section>
    </div>);
  }
}

export default withRouter(BookingReviewForm);


// <input type="radio"
//   checked={ this.state.stars - 2 }
//   value={ this.state.star3 }
//   onChange={ this.updateRadio("star3") }/>
