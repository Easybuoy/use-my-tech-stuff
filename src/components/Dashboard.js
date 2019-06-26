// dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { getUsers, getItems } from '../actions/index';

import './Dashboard.scss';

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
    console.log(`users props`, this.props.users);
    return (
      <div className='dashboard-container'>
        <div className='user-info'>
          {this.props.users
            .filter(user => user.id === this.state.userId)
            .map(user => {
              return (
                <div className='user-card' key={user.id}>
                  <p className='user-name'>
                    <img
                      src='https://www.lensrentals.com/blog/media/2016/02/Cinematic-Headshots-1.jpg'
                      className='user-profile-img'
                    />
                    Hi, <span className='highlight'>{user.username}</span>
                  </p>
                  <Link to={`/user/${user.id}`}>Edit Your Profile</Link>
                </div>
              );
            })}
        </div>
        <div className='item-cards-container'>
          {this.props.items
            .filter(item => item.users_id === this.state.userId)
            .map(userItem => {
              return (
                <div className='item-card' key={userItem.id}>
                  <h1>{userItem.name}</h1>
                  <Link to={`/item/${userItem.id}`}>{userItem.name}</Link>
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
