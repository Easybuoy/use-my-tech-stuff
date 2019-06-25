// dependencies
import React from 'react';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

import { getUsers } from '../actions/index';

class Dashboard extends React.Component {
  state = {
    users: [],
    items: [],
    userId: 0
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div className='dashboard-container'>
        <h1>private dashboard</h1>
        {this.props.users.map(user => (
          <div className='user-card' key={user.id}>
            <h6 className='user-id'>User ID {user.id}</h6>
            <p>Username {user.username}</p>
            <p className='item-price'>User email {user.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  error: state.error,
  userId: state.userId,
  isUpdatingItem: false
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Dashboard);
