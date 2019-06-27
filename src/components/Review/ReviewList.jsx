import React from "react";
import Review from "./Review";
import dummy from "./reviewdummy";

import { ReviewList as StyledReviewList } from "../../styles/Styles";

export default function ReviewList() {
  return (
    <StyledReviewList>
      {dummy.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </StyledReviewList>
  );
}
