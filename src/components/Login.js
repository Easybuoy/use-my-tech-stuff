// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBRow, MDBCol } from 'mdbreact';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-form-container'>
        <h1>User Login</h1>
        <form>
          <input type='text' name='username' value='' placeholder='username' />
          <input
            type='password'
            name='password'
            value=''
            placeholder='password'
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
