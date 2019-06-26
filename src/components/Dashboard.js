// dependencies
import React from 'react';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { login } from '../actions';
import Items from './Items';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { getUsers, getItems } from '../actions/index';

class Dashboard extends React.Component {
  state = {
    userId: 0
  };

  componentDidMount() {
    this.props.getUsers();
    this.props.getItems();
    this.setState({
      userId: decode(localStorage.getItem('token')).subject
    });
  }

  logoutUser = e => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='dashboard-container'>
        <h1>private dashboard</h1>
        {this.state.userId}
        <div className='item'>
          {this.props.items
            .filter(item => item.users_id === this.state.userId)
            .map(userItem => {
              return (
                <div className='test' key={userItem.id}>
                  <h1>{userItem.name}</h1>
                  <Link to={`/item/${userItem.id}`}>{userItem.name}</Link>
                  <p>okay.</p>
                </div>
              );
            })}
        </div>
        <button onClick={this.logoutUser}>Log Out</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  error: state.error,
  userId: state.userId,
  items: state.items
});

export default connect(
  mapStateToProps,
  { getUsers, getItems }
)(Dashboard);
