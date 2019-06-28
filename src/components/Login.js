// dependencies
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { Form, Input, Button } from "../styles/Styles";

// components

// styles
import "./Login.scss";

// actions
import { userLogin } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    this.props.userLogin(this.state.credentials);
  };

  render() {
    const { isLoggedIn, error } = this.props;
    if (isLoggedIn) {
      this.props.history.push("/");
    }

    if (error) {
      toast.error("Error Login In, Please Try Again");
    }

    return (
      
      <div className="mt-5 mb-5">
        <Form
          className="text-center border border-light p-5 w-50 text-center m-auto mb-5"
          onSubmit={this.login}
        >
          <p className="h4 mb-4">Sign in</p>
          <Input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
            className="form-control mb-4"
            placeholder="Enter Username"
            required
          />

          <Input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
            className="form-control mb-4"
            placeholder="Enter Password"
            required
          />

          <div className="d-flex justify-content-around" />

          <Button className="btn  btn-block my-4" type="submit">
            Sign in
          </Button>

          <p>
            Not a member?
            <Link to="/register" className="purple-text">
              Register
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
  error: state.error,
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  { userLogin }
)(Login);
