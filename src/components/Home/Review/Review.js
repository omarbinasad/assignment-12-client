import React from "react";
import Rating from "@mui/material/Rating";

const Review = ({ ourreview }) => {
  const { review, rating } = ourreview;
  const [value, setValue] = React.useState(2);

  return (
    <div className="text-white">
      <ul>
        {" "}
        <li>
          <h5 style={{ color: "#d1d1d1", marginTop: "30px" }}>{review}</h5>
          <div className="">
            <h5 className="text-warning">{rating}</h5>
            <Rating
              name="half-rating-read"
              value={rating}
              precision={0.5}
              readOnly
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Review;
