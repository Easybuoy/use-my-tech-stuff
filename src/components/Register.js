// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUser } from '../actions';

class Register extends Component {
  state = {
    user: [],
    username: '',
    password: '',
    email: ''
  };

  handleChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  registerUser = e => {
    e.preventDefault();
    this.props.registerUser(this.state.user).then(res => {
      if (res) {
        this.props.history.push('/');
      }
    });
  };

  render() {
    console.log('Props in Register.js', this.props);
    return (
      <div className='register-container'>
        <h1>Register an Account</h1>
        <form onSubmit={this.registerUser}>
          <input
            type='email'
            name='email'
            value={this.state.user.email}
            onChange={this.handleChange}
            placeholder='email address'
          />
          <input
            type='text'
            name='username'
            value={this.state.user.username}
            onChange={this.handleChange}
            placeholder='username'
          />
          <input
            type='password'
            name='password'
            value={this.state.user.password}
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
