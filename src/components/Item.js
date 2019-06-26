import React, { Component } from "react";
import { connect } from "react-redux";
import { Triple } from "react-preloading-component";
import { toast } from "react-toastify";

import { PreLoader, Item as StyledItem } from "../styles/Styles";
import { getItemById } from "../actions/";

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

    const { id, name, price, image_url } = this.props.items[0];

    return (
      <StyledItem className="container-fluid">
        {/* <h4
          className="font-weight-bold"
          style={{ fontFamily: '"Ubuntu", sans-serif' }}
        >§x
          {capitalizeFistCharacter(this.state.category_id)}
        </h4>
        <div className="card-deck mb-5">
          {this.props.categoryItems.map(item => (
            <CategoryDetail key={item.id} item={item} />
          ))}
        </div> */}
        <img src={image_url} alt="Tech" className="img-fluid" />
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
