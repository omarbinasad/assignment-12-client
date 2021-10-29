import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/services", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
      console.log(res);
    });
  };

  return (
    <div className="add-service-container">
      <h2>Add a Service</h2>
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

export default AddService;
