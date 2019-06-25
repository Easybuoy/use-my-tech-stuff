// dependencies
import React from 'react';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import decode from 'jwt-decode';
import { getUsers } from '../actions/index';

class Dashboard extends React.Component {
  state = {
    users: [],
    items: [],
    userId: 0
  };

  componentDidMount() {
    this.props.getUsers();
  }

  getToken = e => {
    let banana = localStorage.getItem('token');
    let decoded = decode(banana);
    console.log(decoded);
  };

  render() {
    return (
      <div className='dashboard-container'>
        <h1>private dashboard</h1>
        <button onClick={this.getToken}>get token</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  error: state.error,
  userId: state.userId,
  isUpdatingItem: false
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Dashboard);
