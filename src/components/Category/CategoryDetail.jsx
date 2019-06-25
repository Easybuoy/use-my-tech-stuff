import React from "react";

import { capitalizeFistCharacter } from "../../util";
import { CategoryDetail as StyledCategoryDetail } from "../../styles/Styles";

export default function CategoryDetail(props) {
  const { name, image_url, price } = props.item;
  let image = "https://mdbootstrap.com/img/Photos/Others/images/16.jpg";
  console.log(props);
  return (
    <StyledCategoryDetail className="col-lg-4 col-md-4 col-sm-12 p-0">
      <div className="card mb-4">
        <div
          className="view overlay category-detail"
          style={{
            // backgroundImage: `linear-gradient(to right bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${image})`
            backgroundImage: `url(${image})`
          }}
        >
          <a href="#!">
            <div className="category-detail-content">
              <div className="message">
                <i className="far fa-envelope fa-3x pr-2 mt-2 message" />
              </div>

              <div className="ratings">
                <i className="fas fa-star fa-2x" />
                <i className="fas fa-star fa-2x" />
                <i className="far fa-star fa-2x" />
                <i className="far fa-star fa-2x" />
                <i className="far fa-star fa-2x" />
              </div>
            </div>
          </a>
        </div>

        <div className="card-body">
          <h4 className="card-title font-weight-bold">{capitalizeFistCharacter(name)}</h4>

          <h6 className="text-muted">Downtown LA, 90017</h6>

          <div className="price">
            <p>Daily Fee: </p>
            <p className="price-value">${price}</p>
          </div>
        </div>
      </div>
    </StyledCategoryDetail>
  );
}
