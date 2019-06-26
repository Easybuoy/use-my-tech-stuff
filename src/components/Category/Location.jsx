import React from "react";
import { Location as StyledLocation } from "../../styles/Styles";

export default function Location() {
  return (
    <StyledLocation>
      <div className="md-form active-purple active-purple-2 mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
    </StyledLocation>
  );
}
