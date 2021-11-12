import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../../../AddService/AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://peaceful-everglades-42205.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
        console.log(res);
      });
  };
  return (
    <div className="add-service-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input placeholder="Image" {...register("img")} />
        <input placeholder="Price" {...register("price")} />
        <textarea placeholder="Description" {...register("description")} />
        <input className="add-service-submit" type="submit" />
      </form>
    </div>
  );
};

export default AddProduct;
