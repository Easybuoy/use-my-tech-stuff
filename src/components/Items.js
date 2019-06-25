import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBRow, MDBCol } from 'mdbreact';

import { getItems } from '../actions';

class Items extends Component {
  state = {
    error: null,
    isFetchingItems: null,
    items: [],
    isLoggingIn: false,
    isRegistering: false,
    isUpdatingItem: null
  };

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    console.log(`state`, this.state);
    console.log(`props`, this.props.items);
    return (
      <div className='items-container'>
        <div className='cards'>
          {this.props.items.map(item => (
            <div className='item-card' key={item.id}>
              <h6 className='item-name'>Item: {item.name}</h6>
              <p>Seller: {item.users_username}</p>
              <p className='item-price'>Rent for only: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

export default connect(
  mapStateToProps,
  { getItems }
)(Items);
