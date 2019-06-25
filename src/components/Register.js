// dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { MDBRow, MDBCol } from 'mdbreact';

const Register = () => {
  return (
    <div className='register-container'>
      <h1>Register an Account</h1>
      <form>
        <input type='text' name='username' value='' placeholder='username' />
        <input
          type='password'
          name='password'
          value=''
          placeholder='password'
        />
        <input type='email' name='email' value='' placeholder='email address' />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
