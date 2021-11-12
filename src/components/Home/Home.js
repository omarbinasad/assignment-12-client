import React from "react";
import Reviews from "./Reviews/Reviews";
import Banner from "./Banner/Banner";
import Products from "./Products/Products";
import DroneShoots from "./DroneShoots/DroneShoots";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div id="home">
      <Header></Header>
      <Banner></Banner>
      <Products></Products>
      <Reviews></Reviews>
      <DroneShoots></DroneShoots>
      <Footer></Footer>
    </div>
  );
};

export default Home;
