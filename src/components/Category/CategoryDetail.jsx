import React from "react";
import { CategoryDetail as StyledCategoryDetail } from "../../styles/Styles";
export default function CategoryDetail(props) {
  const { name, image_url, price } = props.item;
  console.log(props);
  return (
    <StyledCategoryDetail className="col-lg-4 col-md-4 col-sm-12 p-0">
      <div className="card mb-4">
        <div className="view overlay">
          <img
            className="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg"
            alt="Card cap"
          />
          <a href="#!">
            <div className="mask rgba-white-slight" />
          </a>
        </div>

        <div className="card-body">
        <h4 className="card-title font-weight-bold">{name}</h4>

          <h6 className="text-muted">Downtown LA, 90017</h6>

          <p className="font-weight-bold">
            Daily Fee: ${price}
          </p>
        </div>
      </div>
    </StyledCategoryDetail>
  );
}
