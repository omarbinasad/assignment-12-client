import React, { useEffect, useState } from "react";
import Product from "../Home/Product/Product";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-everglades-42205.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div id="services">
      <Header></Header>
      <h1 className="service-title text-white text-center  py-4">
        All Products
      </h1>
      <div className="container service-container">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AllProducts;
