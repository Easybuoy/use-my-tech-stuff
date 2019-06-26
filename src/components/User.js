// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUser } from '../actions/index';
import decode from 'jwt-decode';

import './User.scss';

class User extends Component {
  state = {
    username: '',
    email: '',
    state: '',
    town: '',
    id: decode(localStorage.getItem('token')).subject
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  updateUser = e => {
    e.preventDefault();
    this.props.updateUser(this.state).then(() => {
      this.props.history.push('/dashboard');
    });
  };

  render() {
    return (
      <div className='form-container'>
        <h1>Update Your Profile</h1>
        <div className='form'>
          <form onSubmit={this.updateUser}>
            <input
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
              placeholder='username will be here'
            />
            <input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              placeholder='email will be here'
            />
            <input
              type='text'
              name='state'
              value={this.state.state}
              onChange={this.handleChange}
              placeholder='state will be here'
            />
            <input
              type='text'
              name='town'
              value={this.state.town}
              onChange={this.handleChange}
              placeholder='town will be here'
            />
            <button>Update Information</button>
            <Link to='/dashboard'>Return to Dashboard</Link>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isUpdatingUser: state.isUpdatingUser,
  error: state.error
});

export default connect(
  mapStateToProps,
  { updateUser }
)(User);
