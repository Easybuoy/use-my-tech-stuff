// dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateItem, getItemById, getUsers } from '../actions/index';
import { Triple } from 'react-preloading-component';
import { toast } from 'react-toastify';

import './AddItem.scss';

import {
  Form,
  Input,
  Select,
  TextArea,
  Button,
  PreLoader
} from '../styles/Styles';

class UpdateItem extends Component {
  state = {
    name: '',
    category: '',
    price: '',
    image_url: '',
    description: '',
    id: this.props.match.params.id
  };

  componentDidMount() {
    this.props.getItemById(this.props.match.params.id);

    setTimeout(() => {
      this.setState({
        name: this.props.item[0].name,
        category: this.props.item[0].category,
        price: this.props.item[0].price,
        image_url: this.props.item[0].image_url,
        description: this.props.item[0].description
      });
    }, 1000);
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  updateItem = e => {
    e.preventDefault();
    this.props.updateItem(this.state);
  };

  render() {
    if (this.props.item.length === 0) {
      return (
        <PreLoader>
          <Triple color='#c015e9' size={80} />
        </PreLoader>
      );
    }

    if (this.props.error) {
      toast.error('Error Updating Item, Please Try Again');
    }

    if (this.props.itemUpdated) {
      toast.success('Item Updated Successfully');
      this.props.history.push('/profile');
    }

    return (
      <div className='mt-5 mb-5'>
        <Form
          onSubmit={this.updateItem}
          className='text-center border border-light p-5 w-50 text-center m-auto'
        >
          <p className='h4 mb-4'>Update Item</p>
          <Input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='item name'
            className='form-control mb-4'
          />
          <Select
            type='text'
            name='category'
            onChange={this.handleChange}
            value={this.state.category}
            className='form-control mb-4'
          >
            <option value='cameras' name='cameras'>
              Cameras
            </option>
            <option value='monitors'>Monitors</option>
            <option value='lights'>Lights</option>
            <option value='cdjs'>CDJS</option>
            <option value='video'>Video</option>
            <option value='events'>Events</option>
          </Select>
          <Input
            type='number'
            name='price'
            value={this.state.price}
            onChange={this.handleChange}
            placeholder='price'
            className='form-control mb-4'
          />
          <Input
            type='text'
            name='image_url'
            value={this.state.image_url}
            onChange={this.handleChange}
            placeholder='image link'
            className='form-control mb-4'
          />
          <TextArea
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
            placeholder='description of your rental'
            className='form-control mb-4'
          />
          <Button className='btn btn-block my-4' type='submit'>
            Update Item
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.itemsById,
  user: state.user,
  users: state.users,
  isUpdatingItem: state.isUpdatingItem,
  error: state.error,
  itemUpdated: state.itemUpdated
});

export default connect(
  mapStateToProps,
  { updateItem, getItemById, getUsers }
)(UpdateItem);
