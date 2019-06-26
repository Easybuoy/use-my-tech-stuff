import React from "react";
import { Link } from "react-router-dom";

import {
  BookItemForm as StyledBookItemForm,
  Input,
  Button
} from "../styles/Styles";

export default function BookItemForm() {
  return (
    // <BookItemForm className="mt-5">
    <StyledBookItemForm className="text-center border border-light p-5 text-center m-auto">
      <p className="h4 mb-4">Register</p>
      <Input
        type="text"
        required
        className="form-control mb-4"
        placeholder="Username"
      />

      <Input
        type="email"
        required
        className="form-control mb-4"
        placeholder="Email"
      />

      <Input
        type="password"
        required
        className="form-control mb-4"
        placeholder="Password"
      />

      <div className="d-flex justify-content-around" />

      <Button className="btn btn-block my-4" type="submit">
        Book Item
      </Button>

      <p>
        Already a member?
        <Link to="/login" className="purple-text">
          Login
        </Link>
      </p>

      <p>or sign in with:</p>
      <a href="##" className="purple-text mx-2">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="##" className="purple-text mx-2">
        <i className="fab fa-twitter" />
      </a>
      <a href="##" className="purple-text mx-2">
        <i className="fab fa-linkedin-in" />
      </a>
      <a href="##" className="purple-text mx-2">
        <i className="fab fa-github" />
      </a>
    </StyledBookItemForm>
    // </div>
  );
}
