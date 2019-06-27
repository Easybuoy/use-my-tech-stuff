// dependencies
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import decode from "jwt-decode";
import { getUsers, getItems, deleteItem, signOut } from "../actions/index";
import styled from "styled-components";
import { Triple } from "react-preloading-component";
import { PreLoader, Button, Profile, Category } from "../styles/Styles";
import "./Dashboard.scss";

// const ItemCard = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 27%;
//   height: 250px;
//   border: none;
//   box-shadow: 1px 1px 5px silver;
//   margin: 1rem;
//   background-image: url(${props => props.img});
//   background-repeat: no-repeat;
//   height: 40vh;
//   background-size: cover;
//   background-position: center;
//   font-size: 1.5rem;
//   font-family: "Ubuntu", sans-serif;

//   .empty {
//     a {
//       text-decoration: none;
//       background-color: red;
//       &:hover {
//         color: #c015e9 !important;
//       }
//       /* color: #3fdbcf; */
//       i {
//         &:hover {
//           color: #c015e9;
//         }
//       }
//     }
//   }
// `;

// const ItemCardsContainer = styled.div`
//   display: flex;
//   width: 85%;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
// `;

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
          <Triple color="#c015e9" size={80} />
        </PreLoader>
      );
    }

    if (this.props.users.length === undefined) {
      return (
        <PreLoader>
          <Triple color="#c015e9" size={80} />
        </PreLoader>
      );
    }

    return (
      <Profile className="card-deck mb-5">
        <div className="col-lg-4 col-md-12 col-sm-12 p-0">
          <div className="profile-detail">
            {this.props.users
              .filter(user => user.id === this.state.userId)
              .map(user => {
                return (
                  <div className="user-card" key={user.id}>
                    <img
                      src={user.image_url}
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
              .filter(item => item.users_id === this.state.userId)
              .map(userItem => {
                return (
                  // <div
                  //   key={userItem.id}
                  //   img={userItem.image_url}
                  //   style={{ border: "1px solid green" }}
                  // >
                  //   <Link to={`/item/${userItem.id}`}>{userItem.name}</Link>
                  //   <p>Price to Rent: {userItem.price}</p>
                  //   <button onClick={this.deleteItem} id={userItem.id}>
                  //     Delete {userItem.name}
                  //   </button>
                  //   <Link to={`/profile/update/${userItem.id}`}>
                  //     Update this item
                  //   </Link>
                  // </div>

                  <div
                    className="card-deck profile-items-list"
                    key={userItem.id}
                  >
                    <div className="card mb-4">
                      <div className="view overlay">
                        <img
                          className="card-img-top"
                          src={userItem.image_url}
                          alt="Item"
                        />
                        <a href="#!">
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>

                      <div className="card-body">
                        <h4 className="card-title">Card title</h4>

                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>

                        <button
                          type="button"
                          className="btn btn-light-blue btn-md"
                        >
                          Read more
                        </button>
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
