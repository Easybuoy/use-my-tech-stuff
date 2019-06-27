import React from "react";
import { Input } from "../../styles/Styles";

export default function NewReview({ handleNewReview, review, onChange }) {
  return (
    <div className="md-form ">
      <Input
        type="text"
        className="form-control mb-4"
        placeholder="Add New Review"
        onKeyUp={e => {
          handleNewReview(e, "Anonymous");
        }}
        value={review}
        onChange={onChange}
      />
    </div>
  );
}
