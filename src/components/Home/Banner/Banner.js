import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" d-flex banner-container">
      <div className="container ms-5 d-flex align-items-center  banner-left col-md-6 col-sm-12 ">
        <h1 className="text-center">
          Explore The World with Flying
          <span style={{ color: "#031433" }}>
            <b>X</b>{" "}
          </span>
        </h1>{" "}
      </div>
      <div
        className="container me-5 d-flex align-items-center justify-content-center banner-right img-container
       col-md-6 col-sm-12"
      >
        <img
          className="img-fluid"
          src="https://i.ibb.co/yVVWXBb/animation-640-kvwanqq6.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
