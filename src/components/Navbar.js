// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';

function Navbar() {
  return (
    <MDBRow>
      <MDBCol size='3'>
        <NavLink to='/'>Home</NavLink>
      </MDBCol>
      <MDBCol size='3'>
        <NavLink to='/items'>Items</NavLink>
      </MDBCol>
      <MDBCol size='3'>
        <NavLink to='/login'>Log In</NavLink>
      </MDBCol>
      <MDBCol size='3'>
        <NavLink to='/register'>Register</NavLink>
      </MDBCol>
    </MDBRow>
  );
}

export default Navbar;
