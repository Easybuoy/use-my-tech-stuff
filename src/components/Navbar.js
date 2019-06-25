// dependencies
import React from 'react';
import { NavLink, BrowserRouter } from 'react-router-dom';
import { MDBRow, MDBCol, MDBNav, MDBNavItem, MDBNavLink } from 'mdbreact';

function Navbar() {
  return (
    <MDBNav className='justify-content-end'>
      <MDBNavItem>
        <MDBNavLink to='/'>Home</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink active to='/register'>
          Sign Up
        </MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink active to='/login'>
          Log In
        </MDBNavLink>
      </MDBNavItem>
    </MDBNav>
  );
}

export default Navbar;
