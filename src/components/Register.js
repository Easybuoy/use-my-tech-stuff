// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUser } from '../actions';

class Register extends Component {
  state = {
    users: []
  };

  handleChange = e => {
    this.setState({
      users: {
        ...this.state.users,
        [e.target.name]: e.target.value
      }
    });
  };

  registerUser = e => {
    e.preventDefault();
    this.props.registerUser(this.state.users).then(res => {
      if (res) {
        this.props.history.push('/');
      }
    });
  };

  render() {
    console.log('Register.js', this.props);
    return (
      <div className='register-container'>
        <h1>Register an Account</h1>
        <form onSubmit={this.registerUser}>
          <input
            type='email'
            name='email'
            value={this.state.users.email}
            onChange={this.handleChange}
            placeholder='email address'
          />
          <input
            type='text'
            name='username'
            value={this.state.users.username}
            onChange={this.handleChange}
            placeholder='username'
          />
          <input
            type='password'
            name='password'
            value={this.state.users.password}
            onChange={this.handleChange}
            placeholder='password'
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  users: state.users,
  isRegistering: state.isRegistering,
  error: state.error
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
