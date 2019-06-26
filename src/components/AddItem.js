// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/index';

import './AddItem.scss';

class AddItem extends Component {
  state = {
    items: [],
    name: '',
    type: '',
    price: '',
    image_url: '',
    description: '',
    userId: this.props.userId
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  addItem = e => {
    e.preventDefault();
    this.props.addItem(this.state).then(() => {
      this.props.history.push('/dashboard');
    });
  };
  render() {
    return (
      <div className='form-container'>
        <h1>Add a Rental Item</h1>
        <div className='form'>
          <form onSubmit={this.addItem}>
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
              placeholder='item name'
            />
            <select type='text' name='category' value='camera'>
              <option>Camera</option>
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
  user: state.user,
  isRegistering: state.isRegistering,
  error: state.error
});

export default connect(
  mapStateToProps,
  { addItem }
)(AddItem);
