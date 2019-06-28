// dependencies
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import decode from "jwt-decode";
import { getUsers, getItems, deleteItem, signOut } from "../actions/index";

import { Triple } from "react-preloading-component";
import { PreLoader, Button, Profile } from "../styles/Styles";
import "./Dashboard.scss";

import defaultAvatar from "../assets/img/default_avatar.png";

class Dashboard extends React.Component {
  state = {
    items: [],
    userId: 0
  };

  async componentDidMount() {
    await this.setState({
      userId: decode(localStorage.getItem("token")).subject
    });

    this.props.getUsers();
    this.props.getItems();
  }

  deleteItem = id => {
    // e.preventDefault();
    if (window.confirm("Are you sure you want to delete this item?")) {
      this.props.deleteItem(id);
    }
  };

  logoutUser = () => {
    this.props.signOut();
  };

  render() {
    if (this.props.isFetchingUsers) {
      return (
        <PreLoader>
          <Triple color="#c015e9" size={80} />
        </PreLoader>
      );
    }

    if (
      this.props.users.length === undefined ||
      this.props.items.length === 0 ||
      this.state.userId === 0
    ) {
      return (
        <PreLoader>
          <Triple color="#c015e9" size={80} />
        </PreLoader>
      );
    }

    return (
      <Profile className="card-deck mb-5">
        <div className="col-lg-4 col-md-6 col-sm-12 p-0">
          <div className="profile-detail">
            {this.props.users
              .filter(user => user.id === this.state.userId)
              .map(user => {
                return (
                  <div className="user-card" key={user.id}>
                    <img
                      src={user.image_url || defaultAvatar}
                      className="user-profile-img"
                      alt="check it"
                    />
                    <p className="user-name">
                      Hi, <span className="highlight">{user.username}</span>
                      <Button
                        onClick={this.logoutUser}
                        className="btn btn-block my-4 w-50"
                        type="submit"
                      >
                        Log Out
                      </Button>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="col-lg-8 col-md-12 col-sm-12 p-0">
          <div className="profile-items">
            <div className="new-item">
              <div className="card text-center p-5">
                <div className="card-body p-5">
                  <Link to="/profile/add">
                    <i className="fas fa-plus fa-7x cyan-text" />
                    <p className="cyan-text"> Create New Item</p>
                  </Link>
                </div>
              </div>
            </div>

            {this.props.items
              .filter((item = {}) => item.users_id === this.state.userId)
              .map(userItem => {
                return (
                  <div
                    className="card-deck profile-items-list col-md-6 col-sm-12"
                    key={userItem.id}
                  >
                    <div className="card mb-4">
                      <div className="view overlay">
                        <img
                          className="card-img-top"
                          src={userItem.image_url}
                          alt="Item"
                        />
                        <Link to={`/item/${userItem.id}`}>
                          <div className="mask rgba-white-slight" />
                        </Link>
                      </div>

                      <div className="card-body">
                        <h4 className="card-title">{userItem.name}</h4>

                        <div className="price">
                          <p className="price-value">${userItem.price}</p>
                          <p className="text-muted">Per Day </p>
                        </div>

                        <div className="buttons">
                          <Button
                            type="button"
                            className="btn btn-block my-4 w-50"
                          >
                            <Link to={`/profile/update/${userItem.id}`}>
                              Edit
                            </Link>
                          </Button>

                          <Button
                            type="button"
                            className="btn btn-block my-4 w-50"
                            onClick={() => {
                              this.deleteItem(userItem.id);
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Profile>
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
