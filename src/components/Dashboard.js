// dependencies
import React from 'react';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';

class Dashboard extends React.Component {
  state = {
    default: []
  };
  render() {
    return (
      <div className='dashboard-container'>
        <h1>private dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
