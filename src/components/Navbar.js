import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import decode from "jwt-decode";

import defaultAvatar from "../assets/img/default_avatar.png";

import logo from "../assets/img/logo.png";
import { Navbar as StyledNavbar, Button } from "../styles/Styles";

function Navbar(props) {
  const { isLoggedIn } = props;
  let image_url = defaultAvatar;

  if (localStorage.token) {
    image_url = decode(localStorage.getItem("token")).image_url_user;
  }
  let navbar = (
    <StyledNavbar>
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark lighten-1 mb-3">
        <Link className="navbar-brand purple-text" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent-555"
        >
          {/* Search */}
          <div className="search-div">
            <div className="search">
              <input
                className=""
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
          <ul className="navbar-nav ml-auto nav-flex-icons justify-content-center nav-unauthenticated">
            <Link to="/register">
              <Button className="btn btn-block" type="submit">
                Sign Up
              </Button>
            </Link>

            <Link to="/login">
              <Button className="btn  btn-block" type="submit">
                Login
              </Button>
            </Link>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );

  if (isLoggedIn === true) {
    navbar = (
      <StyledNavbar>
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark lighten-1 mb-3">
          <Link className="navbar-brand purple-text" to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "40px", height: "40px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-555"
            aria-controls="navbarSupportedContent-555"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent-555"
          >
            {/* Search */}
            <div className="search-div">
              <div className="search">
                <input
                  className=""
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>
            <ul className="navbar-nav ml-auto nav-flex-icons justify-content-center">
              <li className="nav-item active">
                <Link
                  className="nav-link text-center nav-text"
                  to="/profile/add"
                >
                  Post Equipment
                </Link>
              </li>

              <li className="nav-item avatar  text-center">
                <Link className="nav-link " to="/profile">
                  <img
                    src={image_url}
                    className="rounded-circle z-depth-0"
                    style={{
                      border: "5px solid #c015e9",
                      height: "70px",
                      width: "70px"
                    }}
                    alt="avatar "
                    height="35"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </StyledNavbar>
    );
  }

  return navbar;
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});
export default connect(mapStateToProps)(Navbar);
