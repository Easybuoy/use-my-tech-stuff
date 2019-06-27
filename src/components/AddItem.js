// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/index';
import decode from 'jwt-decode';

import './AddItem.scss';

class AddItem extends Component {
  state = {
    users_username: '',
    users_town: '',
    users_state: '',
    name: '',
    image_url: '',
    price: 0,
    category: 'cameras',
    description: '',
    users_id: decode(localStorage.getItem('token')).subject
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
      this.props.history.push('/profile');
    });
  };
  render() {
    console.log(this.props);
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
            <select
              type='text'
              name='category'
              onChange={this.handleChange}
              value={this.state.category}
            >
              <option value='cameras'>Cameras</option>
              <option value='monitors'>Monitors</option>
              <option value='lights'>Lights</option>
              <option value='cdjs'>CDJS</option>
              <option value='video'>Video</option>
              <option value='events'>Events</option>
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
              name='users_state'
              value={this.state.state}
              onChange={this.handleChange}
              placeholder='state'
            />
            <input
              type='text'
              name='users_town'
              value={this.state.town}
              onChange={this.handleChange}
              placeholder='town'
            />
            <input
              type='text'
              name='image_url'
              value={this.state.image_url}
              onChange={this.handleChange}
              placeholder='image link'
            />
            <textarea
              name='description'
              value={this.state.description}
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
  error: state.error,
  users: state.users
});

export default connect(
  mapStateToProps,
  { addItem }
)(AddItem);
