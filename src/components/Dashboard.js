// dependencies
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { getUsers, getItems, deleteItem, signOut } from '../actions/index';
import styled from 'styled-components';
import { Triple } from 'react-preloading-component';
import { PreLoader } from '../styles/Styles';
import './Dashboard.scss';

const ItemCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 27%;
  height: 250px;
  border: none;
  box-shadow: 1px 1px 5px silver;
  margin: 1rem;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  height: 40vh;
  background-size: cover;
  background-position: center;
`;

const ItemCardsContainer = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

class Dashboard extends React.Component {
  state = {
    items: [],
    userId: 0
  };

  async componentDidMount() {
    await this.setState({
      userId: decode(localStorage.getItem('token')).subject
    });

    this.props.getUsers();
    this.props.getItems();
  }

  deleteItem = e => {
    e.preventDefault();
    this.props.deleteItem(e.target.id);
  };

  logoutUser = () => {
    this.props.signOut();
  };

  render() {
    if (this.props.isFetchingUsers) {
      return (
        <PreLoader>
          <Triple color='#c015e9' size={80} />
        </PreLoader>
      );
    }

    if (this.props.users.length === undefined) {
      return (
        <PreLoader>
          <Triple color='#c015e9' size={80} />
        </PreLoader>
      );
    }

    return (
      <div className='dashboard-container'>
        <div className='user-info'>
          {this.props.users
            .filter(user => user.id === this.state.userId)
            .map(user => {
              return (
                <div className='user-card' key={user.id}>
                  <img
                    src={user.image_url}
                    className='user-profile-img'
                    alt='check it'
                  />
                  <p className='user-name'>
                    Hi, <span className='highlight'>{user.username}</span>
                  </p>
                </div>
              );
            })}
        </div>
        <ItemCardsContainer>
          <ItemCard className='empty'>
            <Link to='/profile/add'>Add An Item</Link>
          </ItemCard>
          {this.props.items
            .filter(item => item.users_id === this.state.userId)
            .map(userItem => {
              return (
                <ItemCard key={userItem.id} img={userItem.image_url}>
                  <Link to={`/item/${userItem.id}`}>{userItem.name}</Link>
                  <p>Price to Rent: {userItem.price}</p>
                  <button onClick={this.deleteItem} id={userItem.id}>
                    Delete {userItem.name}
                  </button>
                  <Link to={`/profile/update/${userItem.id}`}>
                    Update this item
                  </Link>
                </ItemCard>
              );
            })}
        </ItemCardsContainer>
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
  isDeletingItem: state.isDeletingItem,
  isFetchingUsers: state.isFetchingUsers
});

export default connect(
  mapStateToProps,
  { getUsers, getItems, deleteItem, signOut }
)(Dashboard);
