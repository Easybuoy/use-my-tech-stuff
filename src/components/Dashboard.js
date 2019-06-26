// dependencies
import React from 'react';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import { login } from '../actions';
import Items from './Items';
import decode from 'jwt-decode';
import { getUsers, getItems } from '../actions/index';

class Dashboard extends React.Component {
  state = {
    userId: 0
  };

  // getToken = () => {
  //   // let banana = ;
  //   // let decoded = decode(banana);
  //   // console.log(decoded.subject);
  //   // console.log(banana);
  // };

  componentDidMount() {
    this.props.getUsers();
    this.props.getItems();
    this.setState({
      userId: decode(localStorage.getItem('token')).subject
    });
  }

  render() {
    // console.log('dashboard props', this.props);
    return (
      <div className='dashboard-container'>
        <h1>private dashboard</h1>
        {this.state.userId}
        <div className='item'>
          {this.props.items
            .filter(item => item.users_id === 1)
            .map(userItem => {
              return (
                <div className='test'>
                  <h1>{userItem.name}</h1>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  error: state.error,
  userId: state.userId,
  items: state.items
});

export default connect(
  mapStateToProps,
  { getUsers, getItems }
)(Dashboard);
