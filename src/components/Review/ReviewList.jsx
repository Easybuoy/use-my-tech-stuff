import React from "react";
import Review from "./Review";
import dummy from "./reviewdummy";

export default function ReviewList() {
  return (
    <div>
      {dummy.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
}
