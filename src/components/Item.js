import React, { Component } from "react";
import { connect } from "react-redux";
import { Triple } from "react-preloading-component";
import { toast } from "react-toastify";

import { PreLoader, Item as StyledItem } from "../styles/Styles";
import { getItemById } from "../actions/";
import BookItemForm from "./BookItemForm";
import ReviewList from "./Review/ReviewList";

class Item extends Component {
  state = {
    item_id: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(this.props.match.params);
    this.setState({ item_id: id });
    this.props.getItemById(id);
  }

  render() {
    if (this.props.loading) {
      return (
        <PreLoader>
          <Triple color="#c015e9" size={80} />
        </PreLoader>
      );
    }

    if (this.props.error) {
      toast.error("Unable to fetch items, Please try again.");
    }

    if (this.props.items.length === 0) {
      return (
        <div className="text-center mt-5 font-weight-bold">
          No Item Detail Found.
        </div>
      );
    }

    const {
      id,
      name,
      price,
      description,
      image_url,
      users_username
    } = this.props.items[0];

    return (
      <StyledItem className="container-fluid">
        <img src={image_url} alt="Tech" className="img-fluid item-caption" />

        <h4 className="pt-3 pl-3 font-weight-bold">{name}</h4>
        <div className="item-content">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="item-detail">
              <div className="item-detail-header">
                <div className="item-detail-location">
                  <i className="fas fa-map-marker-alt fa-2x" />
                  <h6 className="text-muted">Downtown LA, 90017</h6>
                </div>

                <div className="item-detail-description">{description}</div>
                <div className="review">
                  <h4 className="font-weight-bold mt-3 pb-3"> Reviews for {name}</h4>
                  <ReviewList />
                </div>
              </div>

              <div className="item-detail-image">
                <img
                  src="https://ca.slack-edge.com/T4JUEB3ME-UHQMX3CLS-8aca137aa115-72"
                  alt="user logo"
                />
                <p>{users_username}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="item-booking">
              <BookItemForm price={price} />
            </div>
          </div>
        </div>

        {/* <div className="price">
              <p>Daily Fee: </p>
              <p className="price-value">${price}</p>
            </div> */}
      </StyledItem>
    );
  }
}

const mapStateToProps = state => ({
  items: state.itemsById,
  loading: state.isFetchingItemsById,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getItemById }
)(Item);
