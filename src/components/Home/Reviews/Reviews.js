import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-everglades-42205.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="reviews-main-container ">
      <h1 className="text-white  service-title review-text text-center pt-5">
        All Reviews
      </h1>
      <div className="d-flex justify-content-center align-items-center">
        {" "}
        <div className="container p-5 reviews-main-container reviews-container ">
          {reviews.map((review) => (
            <Review key={review._id} ourreview={review}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
