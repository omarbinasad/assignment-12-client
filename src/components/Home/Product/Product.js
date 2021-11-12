import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, description, img, price } = product;

  return (
    <div className="py-3 container service">
      <img src={img} alt="" />
      <div className="p-4 body">
        <h3 className="product-name text-white">{name}</h3>
        <p className="product-desc text-light">{description.slice(0, 100)}</p>

        <button className="details-btn shadow ">
          <Link to={`/product/${_id}`}>Buy Now</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
