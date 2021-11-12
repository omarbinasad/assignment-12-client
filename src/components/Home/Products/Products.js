import React, { useEffect, useState } from "react";
import "./Products.css";

import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-everglades-42205.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div id="services">
      <h1 className="service-title text-white text-center py-4">
        Featured Products
      </h1>
      <div className="container service-container">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
