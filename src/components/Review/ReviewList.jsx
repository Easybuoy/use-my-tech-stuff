import React, { Component } from 'react';
import decode from 'jwt-decode';

import Review from './Review';
import dummy from './reviewdummy';

import { ReviewList as StyledReviewList } from '../../styles/Styles';
import NewReview from './NewReview';

export default class ReviewList extends Component {
  constructor() {
    super();
    this.state = {
      reviews: dummy,
      review: ''
    };
  }

  onChange = e => {
    this.setState({ review: e.target.value });
  };

  handleNewReview = e => {
    let username = 'Anonnymous';
    if (localStorage.token) {
      username = decode(localStorage.getItem('token')).username;
    }

    if (e.key === 'Enter') {
      const newReviews = {
        id: this.state.reviews.length + 1,
        rating: 4,
        name: username,
        comment: this.state.review
      };

      this.setState({
        reviews: this.state.reviews.concat(newReviews),
        review: ''
      });
    }
  };

  render() {
    return (
      <StyledReviewList>
        {this.state.reviews.map(review => (
          <Review review={review} key={review.id} />
        ))}
        <NewReview
          handleNewReview={this.handleNewReview}
          review={this.state.review}
          onChange={this.onChange}
        />
      </StyledReviewList>
    );
  }
}
