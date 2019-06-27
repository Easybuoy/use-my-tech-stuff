// dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { updateItem } from "../actions/index";
import "./AddItem.scss";

import { Form, Input, Select, TextArea, Button } from "../styles/Styles";

class UpdateItem extends Component {
  state = {
    name: "",
    category: "cameras",
    price: "",
    image_url: "",
    description: "",
    id: this.props.match.params.id
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  updateItem = e => {
    e.preventDefault();
    this.props.updateItem(this.state);
    // .then(() => {
    //   this.props.history.push('/profile');
    // });
  };

  render() {
    return (
      <div className="mt-5 mb-5">
        <Form
          onSubmit={this.updateItem}
          className="text-center border border-light p-5 w-50 text-center m-auto"
        >
          <p className="h4 mb-4">Update Item</p>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="item name"
            className="form-control mb-4"
          />
          <Select
            type="text"
            name="category"
            onChange={this.handleChange}
            value={this.state.category}
            className="form-control mb-4"
          >
            <option value="cameras" name="cameras">
              Cameras
            </option>
            <option value="monitors">Monitors</option>
            <option value="lights">Lights</option>
            <option value="cdjs">CDJS</option>
            <option value="video">Video</option>
            <option value="events">Events</option>
          </Select>
          <Input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            placeholder="price"
            className="form-control mb-4"
          />
          <Input
            type="text"
            name="image_url"
            value={this.state.image_url}
            onChange={this.handleChange}
            placeholder="image link"
            className="form-control mb-4"
          />
          <TextArea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="description of your rental"
            className="form-control mb-4"
          />
          <Button className="btn btn-block my-4" type="submit">
            Update Item
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: [],
  user: state.user,
  users: state.users,
  isUpdatingItem: state.isUpdatingItem,
  error: state.error
});

export default connect(
  mapStateToProps,
  { updateItem }
)(UpdateItem);
