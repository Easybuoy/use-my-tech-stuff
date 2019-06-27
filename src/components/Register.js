// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// styles
import './Register.scss';

// actions
import { registerUser } from '../actions';

class Register extends Component {
  state = {
    username: '',
    email: '',
    state: '',
    town: '',
    password: ''
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  registerUser = e => {
    e.preventDefault();
    this.props.registerUser(this.state).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    console.log('Props in Register.js', this.props);
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
      <Redirect to='/dashboard' />
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isRegistering: state.isRegistering,
  error: state.error
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
