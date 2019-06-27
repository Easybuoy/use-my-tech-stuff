// dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/index";
import decode from "jwt-decode";
import { toast } from "react-toastify";
import { Form, Input, Button, Select, TextArea } from "../styles/Styles";
import "./AddItem.scss";

class AddItem extends Component {
  state = {
    users_username: "",
    users_town: "",
    users_state: "",
    name: "",
    image_url: "",
    price: "",
    category: "cameras",
    description: "",
    users_id: decode(localStorage.getItem("token")).subject
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  addItem = e => {
    e.preventDefault();
    this.props.addItem(this.state);
  };
  render() {
    const { itemAdded, error } = this.props;
    if (itemAdded) {
      toast.success("Item Added Successfully");
      this.props.history.push("/profile");
    }

    if (error) {
      toast.error("Error Adding Item");
    }

    return (
      <div className="mt-5 mb-5">
        <Form
          onSubmit={this.addItem}
          className="text-center border border-light p-5 w-50 text-center m-auto mb-5"
        >
          <p className="h4 mb-4">Add a Rental Item</p>

          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Enter Item Name"
            className="form-control mb-4"
            required
          />
          <Select
            type="text"
            name="category"
            onChange={this.handleChange}
            value={this.state.category}
            className="form-control mb-4"
            required
          >
            <option value="cameras">Cameras</option>
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
            placeholder="Enter Item Price"
            className="form-control mb-4"
            required
          />

          <Input
            type="text"
            name="image_url"
            value={this.state.image_url}
            onChange={this.handleChange}
            placeholder="Enter Item Image Link"
            className="form-control mb-4"
          />
          <TextArea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Enter Item Description"
            className="form-control mb-4"
            required
          />
          <Button className="btn  btn-block my-4" type="submit">
            Add Item
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  users: state.users,
  itemAdded: state.itemAdded
});

export default connect(
  mapStateToProps,
  { addItem }
)(AddItem);
