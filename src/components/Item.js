import React, { Component } from "react";
import { connect } from "react-redux";

import { getItemById } from "../actions/";

class Item extends Component {
  state = {
    item_id: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(this.props.match.params);
    this.setState({ item_id: id });
  }

  render() {
    console.log(`item props`, this.props);
    return (
      <div className="test-div">
        <h1>aasdasd</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  
})

export default connect(
  mapStateToProps,
  { getItemById }
)(Item);
