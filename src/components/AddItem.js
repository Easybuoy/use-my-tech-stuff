// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/index';

class AddItem extends Component {
  state = {};
  render() {
    return (
      <div className='form-container'>
        <h1>Coming from adding a form</h1>
      </div>
    );
  }
}

export default AddItem;
