import React from "react";
import { Link } from "react-router-dom";

import {
  BookItemForm as StyledBookItemForm,
  Input,
  Button
} from "../styles/Styles";

export default function BookItemForm({ price }) {
  return (
    <StyledBookItemForm className="text-center border border-light p-5 text-center m-auto">
      {/* <p className="h4 mb-4">Per Day</p> */}

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

      <Input
        type="password"
        required
        className="form-control mb-4"
        placeholder="Enter Meetup Spot"
      />

      <div className="d-flex justify-content-around" />

      <Button className="btn btn-block my-4" type="submit">
        Book Item
      </Button>
    </StyledBookItemForm>
    // </div>
  );
}
