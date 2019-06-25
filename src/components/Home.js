// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBRow, MDBCol } from 'mdbreact';

function Home() {
  return (
    <div className='home-container'>
      <h1>Coming From Home route</h1>
    </div>
  );
}

export default Home;
