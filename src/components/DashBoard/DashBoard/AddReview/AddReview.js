import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://peaceful-everglades-42205.herokuapp.com/reviews", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Reviews added successfully");
          reset();
        }
        console.log(res);
      });
  };
  return (
    <div className="add-service-container">
      <h2>Add Review</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea required placeholder="review" {...register("review")} />
        <input
          required
          type="number"
          max="5"
          min="1"
          placeholder="rating"
          {...register("rating")}
        />
        <input className="add-service-submit" type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
