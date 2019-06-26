// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItem } from '../actions/index';
import decode from 'jwt-decode';

import './AddItem.scss';

class UpdateItem extends Component {
  state = {
    name: '',
    category: '',
    price: '',
    image_url: '',
    description: ''
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  updateItem = e => {
    e.preventDefault();
    this.props.updateItem(this.state).then(() => {
      this.props.history.push('/dashboard');
    });
  };
  render() {
    console.log(`updateitem props?`, this.props);
    return (
      <div className='form-container'>
        <h1>Update Your Rental Listing</h1>
        <div className='form'>
          <form onSubmit={this.updateItem}>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='item name'
            />
            <select type='text' name='category'>
              <option value='camera'>Camera</option>
              <option value='hats'>Hats</option>
              <option value='bikes'>Bikes</option>
              <option value='camera'>Camera</option>
              <option value='camera'>Camera</option>
            </select>
            <input
              type='number'
              name='price'
              value={this.state.price}
              onChange={this.handleChange}
              placeholder='price'
            />
            <input
              type='text'
              name='image_url'
              value={this.state.town}
              onChange={this.handleChange}
              placeholder='image link'
            />
            <textarea
              type='password'
              name='description'
              value={this.state.password}
              onChange={this.handleChange}
              placeholder='description of your rental'
            />
            <button>Add Item</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: [],
  isUpdatingItem: state.isRegistering,
  error: state.error
});

export default connect(
  mapStateToProps,
  { updateItem }
)(UpdateItem);
