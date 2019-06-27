// // dependencies
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// // styles
// import './Register.scss';

// // actions
// import { registerUser } from '../actions';

// class Register extends Component {
//   state = {
//     username: '',
//     email: '',
//     state: '',
//     town: '',
//     password: ''
//   };

//   handleChange = e => {
//     this.setState({
//       ...this.state,
//       [e.target.name]: e.target.value
//     });
//   };

//   registerUser = e => {
//     e.preventDefault();
//     this.props.registerUser(this.state).then(() => {
//       this.props.history.push('/');
//     });
//   };

//   render() {
//     return !localStorage.getItem('token') ? (
//       <div className='register-container'>
//         <h3>Sign Up</h3>
//         <form onSubmit={this.registerUser}>
//           <input
//             type='text'
//             name='email'
//             value={this.state.email}
//             onChange={this.handleChange}
//             placeholder='email address'
//           />
//           <input
//             type='text'
//             name='username'
//             value={this.state.username}
//             onChange={this.handleChange}
//             placeholder='username'
//           />
//           <input
//             type='text'
//             name='state'
//             value={this.state.state}
//             onChange={this.handleChange}
//             placeholder='state'
//           />
//           <input
//             type='text'
//             name='town'
//             value={this.state.town}
//             onChange={this.handleChange}
//             placeholder='town'
//           />
//           <input
//             type='password'
//             name='password'
//             value={this.state.password}
//             onChange={this.handleChange}
//             placeholder='password'
//           />
//           <button>Register</button>
//         </form>
//       </div>
//     ) : (
//       <Redirect to='/dashboard' />
//     );
//   }
// }

// const mapStateToProps = state => ({
//   user: state.user,
//   isRegistering: state.isRegistering,
//   error: state.error
// });

// export default connect(
//   mapStateToProps,
//   { registerUser }
// )(Register);



import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { errorOption, successOption } from "../../utils/utils";
import { Button, Input, Form } from "../../styles/Styles";
import { registerUser } from '../actions';

function Register(props) {
  const username = React.createRef();
  const email = React.createRef();
  const password = React.createRef();

  const { error } = props;
  const { isSignedIn, isRegistered } = props.auth;
  const handleRegister = e => {
    e.preventDefault();
    this.props.registerUser(this.state).then(() => {
      this.props.history.push('/profile');
    });
  };

  render() {
    return !localStorage.getItem('token') ? (
      <div className='register-container'>
        <h3>Sign Up</h3>
        <form onSubmit={this.registerUser}>
          <input
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='email address'
          />
          <input
            type='text'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            placeholder='username'
          />
          <input
            type='text'
            name='state'
            value={this.state.state}
            onChange={this.handleChange}
            placeholder='state'
          />
          <input
            type='text'
            name='town'
            value={this.state.town}
            onChange={this.handleChange}
            placeholder='town'
          />
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            placeholder='password'
          />
          <button>Register</button>
        </form>
      </div>
    ) : (
      <Redirect to='/profile' />
    );
  }

  if (error) {
    toast.error(error, errorOption());
  }

  return (
    <div className="mt-5">
      <Form
        className="text-center border border-light p-5 w-50 text-center m-auto"
        onSubmit={handleRegister}
      >
        <p className="h4 mb-4">Register</p>
        <Input
          type="text"
          ref={username}
          required
          className="form-control mb-4"
          placeholder="Username"
        />

        <Input
          type="email"
          ref={email}
          required
          className="form-control mb-4"
          placeholder="Email"
        />

        <Input
          type="password"
          ref={password}
          required
          className="form-control mb-4"
          placeholder="Password"
        />

        <div className="d-flex justify-content-around" />

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

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.error.error
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
