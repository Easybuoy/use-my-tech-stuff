import React from 'react';
import { toast } from 'react-toastify';

import {
  BookItemForm as StyledBookItemForm,
  Input,
  Button
} from '../styles/Styles';

export default function BookItemForm({ price, users_username }) {
  const startDate = React.createRef();
  const endDate = React.createRef();
  const meetupSpot = React.createRef();

  const handleBooking = e => {
    e.preventDefault();
    if (!startDate.current.value) {
      toast.error('Kindly Fill in Start Date');
    }

    if (!endDate.current.value) {
      toast.error('Kindly Fill in End Date');
    }

    if (!meetupSpot.current.value) {
      toast.error('Kindly Fill in Meetup Spot');
    }

    if (
      meetupSpot.current.value &&
      startDate.current.value &&
      endDate.current.value
    ) {
      toast.success(
        `Item booked successfully, Kindly lookout for an email from ${users_username}`
      );

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
  return (
    <StyledBookItemForm
      className='text-center border border-light p-5  m-auto'
      onSubmit={handleBooking}
    >
      <div className='form-header d-flex flex-row'>
        <div className='top-content'>
          <div className='price'>
            <p className='price-value'>${price}</p>
            <p className='text-muted'>Per Day </p>
          </div>

          <div className='ratings'>
            <i className='fas fa-star fa-2x' />
            <i className='fas fa-star fa-2x' />
            <i className='fas fa-star fa-2x' />
            <i className='fas fa-star fa-2x' />
            <i className='far fa-star fa-2x' />
          </div>
        </div>
      </div>

      <div className='d-flex flex-row justify-content-between dates'>
        <div className='md-form'>
          <p>Start Date</p>
          <Input type='date' className='form-control mb-4' ref={startDate} />
        </div>

        <div className='md-form'>
          <p>End Date</p>
          <Input type='date' className='form-control mb-4' ref={endDate} />
        </div>
      </div>

      <div className='md-form '>
        <Input
          type='text'
          className='form-control mb-4'
          placeholder={`${price} x 0 Days`}
          disabled
        />
      </div>

      <div className='d-flex flex-row justify-content-between font-weight-bold m-0 p-0'>
        <p>Total</p>
        <p>$0</p>
      </div>

      <div className='md-form'>
        <Input
          type='text'
          className='form-control mb-4'
          placeholder='Suggest Meetup Spot'
          ref={meetupSpot}
        />
      </div>

      <Button className='btn btn-block my-4' type='submit'>
        Book Item
      </Button>
    </StyledBookItemForm>
  );
}
