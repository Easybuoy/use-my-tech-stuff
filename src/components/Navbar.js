// // dependencies
// import React from 'react';
// import { NavLink, BrowserRouter } from 'react-router-dom';
// import { MDBRow, MDBCol, MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

// function Navbar() {
//   return (
//     <MDBNav className='justify-content-end'>
//       <MDBNavItem>
//         <MDBNavLink to='/'>Home</MDBNavLink>
//       </MDBNavItem>
//       <MDBNavItem>
//         <MDBNavLink active to='/register'>
//           Sign Up
//         </MDBNavLink>
//       </MDBNavItem>
//       <MDBNavItem>
//         <MDBNavLink active to='/login'>
//           Log In
//         </MDBNavLink>
//       </MDBNavItem>
//     </MDBNav>
//   );
// }

// export default Navbar;

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.png";
import { Navbar as StyledNavbar } from "../styles/Styles";
// import { signOut } from "../../actions/auth";

function Navbar(props) {
  let isSignedIn = true;
  // const { isSignedIn } = props.auth;
  let navbar = null;
  if (isSignedIn === true) {
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
                class=""
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              </div>
              
            </div>
            <ul className="navbar-nav ml-auto nav-flex-icons justify-content-center">
              <li className="nav-item active">
                <a className="nav-link text-center nav-text" href="#2">
                  Post Equipment
                </a>
              </li>

              <li className="nav-item avatar  text-center">
                <Link className="nav-link " to="/profile">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                    className="rounded-circle z-depth-0"
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
  auth: state.auth
});
export default connect(
  mapStateToProps
  // { signOut }
)(Navbar);
