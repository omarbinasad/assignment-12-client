import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className=" d-flex banner-container">
        <div
          className="container me-5 d-flex align-items-center justify-content-center banner-right img-container
       col-md-6"
        >
          <img src="https://i.ibb.co/B2kgLpx/45056-contact-us-1.gif" alt="" />
        </div>
        <div className="container about-banner-right col-md-6 ">
          <div>
            <h1
              className="text-start
             text-white"
            >
              About Us
            </h1>
          </div>{" "}
          <br />
          <p className="text-white">
            We offer a wide range of services, including emergency care,
            scheduled surgeries, labor and delivery services, diagnostic
            testing, lab work, and patient education. Depending on their health
            situation, patients may receive inpatient or outpatient care from a
            hospital.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
