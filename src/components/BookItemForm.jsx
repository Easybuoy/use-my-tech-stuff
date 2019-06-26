import React from "react";
import { Link } from "react-router-dom";

import {
  BookItemForm as StyledBookItemForm,
  Input,
  Button
} from "../styles/Styles";

export default function BookItemForm({}) {
  return (
    <StyledBookItemForm className="text-center border border-light p-5 text-center m-auto">
      <p className="h4 mb-4">Per Day</p>
     
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
