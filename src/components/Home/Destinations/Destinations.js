import React from "react";
import "./Destinations.css";

const Destinations = () => {
  return (
    <div className="destination-main-container">
      <h1 className="text-center py-5 text-white">Top Destinations</h1>
      <div className="container destination-container">
        <div className="py-3 container destination service">
          <img
            src="https://cdn.pixabay.com/photo/2021/01/27/13/47/cliff-5954980__340.jpg"
            alt=""
          />
          <div className=" body destination-body">
            <h3 className="text-white">Bali,Indonesia</h3>
          </div>
        </div>
        <div className="py-3 container destination service">
          <img
            src="https://cdn.pixabay.com/photo/2018/12/31/18/27/mosque-3905675_960_720.jpg"
            alt=""
          />
          <div className="body destination-body">
            <h3 className="text-white">Istanbul,Turkey</h3>
          </div>
        </div>
        <div className="py-3 container destination service">
          <img
            src="https://cdn.pixabay.com/photo/2017/03/26/19/37/landscape-2176348_960_720.jpg"
            alt=""
          />
          <div className="body destination-body">
            <h3 className="text-white">Kashmir</h3>
          </div>
        </div>
        <div className="py-3 container destination service">
          <img
            src="https://images.unsplash.com/photo-1567614370622-e3dd3c2574b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNveCUyMGJhemFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            alt=""
          />
          <div className="body destination-body">
            <h3 className="text-white">Cox's Bazar</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
