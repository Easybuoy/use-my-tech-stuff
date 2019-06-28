// dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Button, Input, Form } from "../styles/Styles";
// styles
import "./Register.scss";

// actions
import { registerUser } from "../actions";

class Register extends Component {
  state = {
    username: "",
    image_url: "",
    email: "",
    state: "",
    town: "",
    password: "",
    location: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  registerUser = e => {
    e.preventDefault();
    this.props.registerUser(this.state);
  };

  render() {
    const { error, isRegistered, isLoggedIn } = this.props;
    if (isLoggedIn) {
      this.props.history.push("/");
    }

    if (isRegistered) {
      toast.success("Registration Succesfull, Kindly Login");
      this.props.history.push("/login");
    }

    if (error) {
      toast.error("Error Registering, Please Try Again");
    }

    return (
      <div className="mt-5 mb-5">
        <Form
          className="text-center border border-light p-5 w-50 text-center m-auto"
          onSubmit={this.registerUser}
        >
          <p className="h4 mb-4">Register</p>
          <Input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email Address"
            className="form-control mb-4"
            required
          />
          <Input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
            className="form-control mb-4"
            required
          />

          <Input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            className="form-control mb-4"
            required
          />

          <Input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
            placeholder="Location"
            className="form-control mb-4"
            required
          />

          <Input
            type="text"
            name="image_url"
            value={this.state.image_url}
            onChange={this.handleChange}
            placeholder="Profile Image URL"
            className="form-control mb-4"
          />

          <Input
            type="text"
            name="state"
            value={this.state.state}
            onChange={this.handleChange}
            placeholder="State"
            className="form-control mb-4"
          />
          <Input
            type="text"
            name="town"
            value={this.state.town}
            onChange={this.handleChange}
            placeholder="Town"
            className="form-control mb-4"
          />

          <Button className="btn btn-block my-4" type="submit">
            Register
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
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isRegistering: state.isRegistering,
  error: state.error,
  isRegistered: state.isRegistered,
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
