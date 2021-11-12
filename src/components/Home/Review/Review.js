import React from "react";

const Review = ({ ourreview }) => {
  const { review, rating } = ourreview;
  return (
    <div className="text-white">
      <ul>
        {" "}
        <li>
          <h5 style={{ color: "#d1d1d1", marginTop: "30px" }}>{review}</h5>

          <h5 className="text-warning">Ratings : {rating}* </h5>
        </li>
      </ul>
    </div>
  );
};

export default Review;
