import React from "react";
import { Link } from "react-router-dom";

import { capitalizeFistCharacter } from "../../util";
import { CategoryDetail as StyledCategoryDetail } from "../../styles/Styles";

export default function CategoryDetail(props) {
  const { id, name, image_url, price, users_town } = props.item;

  return (
    <StyledCategoryDetail className="col-lg-4 col-md-6 col-sm-12 p-0">
      <div className="card mb-4">
        <div
          className="view overlay category-detail"
          style={{
            backgroundImage: `url(${image_url ||
              "https://pvsmt99345.i.lithium.com/t5/image/serverpage/image-id/10546i3DAC5A5993C8BC8C?v=1.0"})`
          }}
        >
          <Link to={`/item/${id}`}>
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
          </Link>
        </div>

        <div className="card-body">
          <h4 className="card-title font-weight-bold">
            {capitalizeFistCharacter(name)}
          </h4>

          <h6 className="text-muted">{users_town || "Unknown Location"}</h6>

          <div className="price">
            <p>Daily Fee: </p>
            <p className="price-value">${price}</p>
          </div>
        </div>
      </div>
    </StyledCategoryDetail>
  );
}
