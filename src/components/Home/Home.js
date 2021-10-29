import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Destinations from "./Destinations/Destinations";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <Services></Services>
      <AboutUs></AboutUs>
      <Destinations></Destinations>
    </div>
  );
};

export default Home;
