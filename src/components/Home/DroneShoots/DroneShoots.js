import React from "react";
import "./DroneShoots.css";

const DroneShoots = () => {
  return (
    <div className="droneshoots-main-container ">
      <h1 className="text-center service-title py-5 text-white">
        Drone Shoots
      </h1>
      <div className="container droneshoots-container">
        <div className="py-3 container droneshoots service">
          <img
            src="https://images.unsplash.com/photo-1496055401924-5e7fdc885742?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
        <div className="py-3 container droneshoots service">
          <img
            src="https://images.unsplash.com/photo-1619356815455-8094bc3f4a6c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=928&q=80"
            alt=""
          />
        </div>
        <div className="py-3 container droneshoots service">
          <img
            src="https://i.ibb.co/8YBn1Yf/landscape-3749373-1280.jpg"
            alt=""
          />
        </div>
        <div className="py-3 container droneshoots service">
          <img
            src="https://images.unsplash.com/photo-1504081628880-804364338133?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DroneShoots;
