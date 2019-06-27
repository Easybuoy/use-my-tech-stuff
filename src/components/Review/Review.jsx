import React from 'react';
import { Review as StyledReview } from '../../styles/Styles';

export default function Review({ review }) {
  return (
    <StyledReview>
      <div className='top-section'>
        <div className='ratings'>
          <i className='fas fa-star fa-2x' />
          <i className='fas fa-star fa-2x' />
          <i className='fas fa-star fa-2x' />
          <i className='fas fa-star fa-2x' />
          <i className='far fa-star fa-2x' />
        </div>
        <p className='text-muted'>{review.name}</p>
      </div>

      <div className='bottom-section'>
        <p>{review.comment}</p>
      </div>
    </StyledReview>
  );
}
