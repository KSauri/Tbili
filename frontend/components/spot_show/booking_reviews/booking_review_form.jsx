import React, { Component } from 'react';
import { withRouter } from 'react-router';

class BookingReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: "",
      star1: false,
      star2: false,
      star3: false,
      star4: false,
      star5: false
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



  update(field) {
    return e => {
      return this.setState({ [field]: !this.state[field] });
    };
  }

  updateReview(e) {
    this.setState({ review: e.target.value });
  }

  render() {
    return (<div className="review-form">
      <section className="flex-row">
        <h3>Leave a Review of your stay</h3>
        <form onSubmit={ this.handleSubmit } className="flex-row">
          <div className="flex-row">
            <input type="radio"
              checked={ this.state.star1 }
              value={ this.state.star1 }
              onChange={ this.update("star1") }/>
            <input type="radio"
              checked={ this.state.star2 }
              value={ this.state.star2 }
              onChange={ this.update("star2") }/>
            <input type="radio"
              checked={ this.state.star3 }
              value={ this.state.star3 }
              onChange={ this.update("star3") }/>
            <input type="radio"
              checked={ this.state.star4 }
              value={ this.state.star4 }
              onChange={ this.update("star4") }/>
            <input type="radio"
              checked={ this.state.star5 }
              value={ this.state.star5 }
              onChange={ this.update("star5") }/>
          </div>
          <div className="flex-column">
            <textarea value={ this.state.review } onChange={ this.updateReview }></textarea>
            <input type="submit" value="Leave your review" />
          </div>
        </form>
      </section>
    </div>);
  }
}

export default withRouter(BookingReviewForm);
