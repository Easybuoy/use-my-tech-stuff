import React from "react";
import { Link } from "react-router-dom";
import ReviewList from "./Review/ReviewList";

import {
  BookItemForm as StyledBookItemForm,
  Input,
  Button
} from "../styles/Styles";

export default function BookItemForm({ price }) {
  return (
    <StyledBookItemForm className="text-center border border-light p-5  m-auto">
      <div className="form-header d-flex flex-row">
        <div className="top-content">
          <div className="price">
            <p className="price-value">${price}</p>
            <p className="text-muted">Per Day </p>
          </div>

          <div className="ratings">
            <i className="fas fa-star fa-2x" />
            <i className="fas fa-star fa-2x" />
            <i className="fas fa-star fa-2x" />
            <i className="fas fa-star fa-2x" />
            <i className="far fa-star fa-2x" />
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-between dates">
        <div className="md-form">
          <p>Start Date</p>
          <Input
            type="date"
            required
            className="form-control mb-4"
            placeholder={`${price} x 0 Days`}
          />
        </div>

        <div className="md-form">
          <p>End Date</p>
          <Input
            type="date"
            required
            className="form-control mb-4"
            placeholder={`${price} x 0 Days`}
          />
        </div>
      </div>

      <div className="md-form ">
        <Input
          type="text"
          required
          className="form-control mb-4"
          placeholder={`${price} x 0 Days`}
        />
      </div>

      <div className="d-flex flex-row justify-content-between font-weight-bold m-0 p-0">
        <p>Total</p>
        <p>$0</p>
      </div>

      <div className="md-form">
        <Input
          type="password"
          required
          className="form-control mb-4"
          placeholder="Suggest Meetup Spot"
        />
      </div>

      {/* <div className="d-flex justify-content-around" /> */}

      <Button className="btn btn-block my-4" type="submit">
        Book Item
      </Button>
    </StyledBookItemForm>
    // </div>
  );
}
