// dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { getUsers, getItems, deleteItem } from '../actions/index';

import './Dashboard.scss';

class Dashboard extends React.Component {
  state = {
    items: [],
    userId: 0
  };

  componentDidMount() {
    this.props.getUsers();
    this.props.getItems();
    this.setState({
      userId: decode(localStorage.getItem('token')).subject
    });
  }

  deleteItem = e => {
    e.preventDefault();
    this.props.deleteItem(e.target.id);
  };

  logoutUser = () => {
    localStorage.removeItem('token');
    this.props.history.push('/');
  };

  render() {
    return (
      <div className='dashboard-container'>
        <div className='user-info'>
          {this.props.users
            .filter(user => user.id === this.state.userId)
            .map(user => {
              return (
                <div className='user-card' key={user.id}>
                  <img
                    src='https://www.lensrentals.com/blog/media/2016/02/Cinematic-Headshots-1.jpg'
                    className='user-profile-img'
                    alt='check it'
                  />
                  <p className='user-name'>
                    {this.state.userId}
                    Hi, <span className='highlight'>{user.username}</span>
                  </p>
                  <Link to={`/user/${user.id}`}>Edit Your Profile</Link>
                </div>
              );
            })}
        </div>
        <div className='item-cards-container'>
          <div className='add-item-container'>
            <Link to='/dashboard/add'>Add An Item</Link>
          </div>
          {this.props.items
            .filter(item => item.users_id === this.state.userId)
            .map(userItem => {
              return (
                <div className='item-card' key={userItem.id}>
                  <img
                    src={userItem.image_url}
                    className='item-img'
                    alt='check this out'
                  />
                  <h1>{userItem.name}</h1>
                  <Link to={`/item/${userItem.id}`}>{userItem.name}</Link>
                  <button onClick={this.deleteItem} id={userItem.id}>
                    Delete {userItem.name}
                  </button>
                </div>
              );
            })}
        </div>
        <div className='button-container'>
          <button onClick={this.logoutUser}>Log Out</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  error: state.error,
  userId: state.userId,
  items: state.items,
  isDeletingItem: state.isDeletingItem
});

export default connect(
  mapStateToProps,
  { getUsers, getItems, deleteItem }
)(Dashboard);
