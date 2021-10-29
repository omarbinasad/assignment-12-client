import React from "react";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div>
      <div className="my-5 px-5 d-flex banner-container">
        <div
          className="container ms-4 d-flex align-items-center justify-content-center banner-right img-container
       col-md-6"
        >
          <img
            className="aboutus-sec-img"
            src="https://i.ibb.co/7RN5TXf/11429-travel-icons.gif"
            alt=""
          />
        </div>
        <div className="me-5 container about-banner-right col-md-6 ">
          <div>
            <h1
              className="text-start
             text-white"
            >
              Why Choose Us
            </h1>
          </div>{" "}
          <br />
          <p className="text-white">
            We offer a wide range of services, Our thoughtful team of
            knowledgeable experts are here to take care of every need, from the
            second you contact us to when you return
          </p>
          <Nav.Link as={HashLink} to="/about">
            <h5 className="p-3 rounded shadow bg-primary text-white">
              Know About Us
            </h5>
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
