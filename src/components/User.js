// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions/index';
import decode from 'jwt-decode';

import './User.scss';

class User extends Component {
  state = {
    users: [],
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
      this.props.history.push('/profile');
    });
  };

  render() {
    return (
      <div className='form-container'>
        <h1>View Your Profile</h1>
        <div className='form'>
          {this.props.users
            .filter(user => user.id === this.props.params.id)
            .map(user => {
              return (
                <div className='user-card' key={user.id} img={user.image_url}>
                  {user.name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  users: state.users
});

export default connect(
  mapStateToProps,
  { updateUser }
)(User);
