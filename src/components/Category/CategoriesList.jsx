import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Triple } from "react-preloading-component";
import { toast } from "react-toastify";

import Location from "./Location";
import { capitalizeFistCharacter } from "../../util";
import { getItemsByCategories } from "../../actions";
import { CategoryHeader, PreLoader } from "../../styles/Styles";
import Category from "./Category";
import CategoryDetail from "./CategoryDetail";

class CategoriesList extends Component {
  state = {
    category_id: null
  };

  componentDidMount() {
    if (this.props.match) {
      const { category_id } = this.props.match.params;

      this.setState({ category_id });
      this.props.getItemsByCategories(category_id);
    }
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
      toast.error("Unable to fetch category items, Please try again.");
    }

    if (this.state.category_id) {
      if (this.props.categoryItems.length === 0) {
        return (
          <div className="text-center mt-5 font-weight-bold">
            No Category Items Found for {this.state.category_id} category.
          </div>
        );
      }
      return (
        <div className="container-fluid">
          <h4
            className="font-weight-bold"
            style={{ fontFamily: '"Ubuntu", sans-serif' }}
          >
            {capitalizeFistCharacter(this.state.category_id)}
          </h4>
          <div className="card-deck mb-5">
            {this.props.categoryItems.map(item => (
              <CategoryDetail key={item.id} item={item} />
            ))}
          </div>
        </div>
      );
    }

    return (
      <>
        <CategoryHeader>
          <div className="header-text">
            <h3>YOU CAN RENT</h3>
            <p>PROFESSIONAL EQUIPMENTS</p>
            <br />
            <Link to="/register">
              <button type="button" className="btn btn-primary">
                Join Now
              </button>
            </Link>
          </div>
        </CategoryHeader>

        {/* Location */}
        <Location />

        {/* Category */}
        <div className="container-fluid">
          <div className="card-deck mb-5">
            <Category
              image="https://images.unsplash.com/photo-1495512046360-dad6e8b83667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
              name="Cameras"
              favicon="fas fa-camera fa-2x"
              path="/category/cameras"
            />
            <Category
              image="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              name="Monitors"
              favicon="fas fa-desktop fa-2x"
              path="/category/monitors"
            />
            <Category
              image="https://images.unsplash.com/photo-1490971774356-7fac993cc438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              name="Lights"
              favicon="far fa-lightbulb fa-2x"
              path="/category/lights"
            />
            <Category
              image="https://images.unsplash.com/photo-1544785349-c4a5301826fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              name="CDJS"
              favicon="fas fa-compact-disc fa-2x"
              path="/category/cdjs"
            />
            <Category
              image="https://images.unsplash.com/photo-1485846147915-69f12fbd03b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              name="Video Cameras"
              favicon="fas fa-video fa-2x"
              path="/category/videos"
            />
            <Category
              image="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
              name="Events"
              favicon="fas fa-glass-cheers fa-2x"
              path="/category/events"
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  categoryItems: state.categoryItems,
  loading: state.isFetchingCategory,
  error: state.error
});

export default connect(
  mapStateToProps,
  { getItemsByCategories }
)(CategoriesList);
