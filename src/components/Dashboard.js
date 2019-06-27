// dependencies
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import decode from "jwt-decode";
import { getUsers, getItems, deleteItem, signOut } from "../actions/index";
import styled from "styled-components";
import "./Dashboard.scss";

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

  componentDidMount() {
    this.props.getUsers();
    this.props.getItems();
    this.setState({
      userId: decode(localStorage.getItem("token")).subject
    });
  }

  deleteItem = e => {
    e.preventDefault();
    this.props.deleteItem(e.target.id);
  };

  logoutUser = () => {
    this.props.signOut();
  };

  render() {
    return (
      <div className="dashboard-container">
        <div className="user-info">
          {this.props.users
            .filter(user => user.id === this.state.userId)
            .map(user => {
              return (
                <div className="user-card" key={user.id}>
                  <img
                    src="https://www.lensrentals.com/blog/media/2016/02/Cinematic-Headshots-1.jpg"
                    className="user-profile-img"
                    alt="check it"
                  />
                  <p className="user-name">
                    {this.state.userId}
                    Hi, <span className="highlight">{user.username}</span>
                  </p>
                  <Link to={`/user/${user.id}`}>Edit Your Profile</Link>
                </div>
              );
            })}
        </div>
        <ItemCardsContainer>
          <ItemCard className="empty">
            <Link to="/profile/add">Add An Item</Link>
          </ItemCard>
          {this.props.items
            .filter(item => item.users_id === this.state.userId)
            .map(userItem => {
              return (
                <ItemCard key={userItem.id} img={userItem.image_url}>
                  <Link to={`/item/${userItem.id}`}>{userItem.name}</Link>
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
        <div className="button-container">
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
  { getUsers, getItems, deleteItem, signOut }
)(Dashboard);
