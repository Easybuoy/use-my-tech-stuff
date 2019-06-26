import React from "react";
import { Location as StyledLocation } from "../../styles/Styles";

import locationImage from "../../assets/img/Icon - Edit.jpg";

export default function Location() {
  return (
    <StyledLocation>
      <div className="location-input">
        <div className="md-form active-purple active-purple-2 mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter Location"
            aria-label="Search"
          />
        </div>
        <img src={locationImage} alt="Location" />
      </div>
      <div className="location-options">
        <div className="location-miles">
          <p>Miles From:</p>
          <select className="">
            <option defaultValue>15</option>
            <option value="1">30</option>
            <option value="2">45</option>
          </select>
        </div>
        <div className="location-popularity">
          <p>Sort By:</p>
          <select className="">
            <option defaultValue>15</option>
            <option value="1">30</option>
            <option value="2">45</option>
          </select>
        </div>
      </div>
    </StyledLocation>
  );
}
