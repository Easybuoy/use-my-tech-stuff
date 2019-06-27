import React from "react";
import { Input, NewReview as StyledNewReview } from "../../styles/Styles";

export default function NewReview({ handleNewReview, review, onChange }) {
  return (
    <StyledNewReview>
      <div className="md-form">
        <Input
          type="text"
          className="form-control mb-4"
          placeholder="Add New Review"
          onKeyUp={handleNewReview}
          value={review}
          onChange={onChange}
        />
      </div>
    </StyledNewReview>
  );
}
