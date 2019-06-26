import React, { Component } from 'react';

class Item extends Component {
  render() {
    console.log(`item props`, this.props);
    return (
      <div className='test-div'>
        <h1>aasdasd</h1>
      </div>
    );
  }
}

export default Item;
