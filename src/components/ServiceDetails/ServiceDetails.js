import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { user } = useAuth();
  const { serviceId } = useParams();
  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    fetch(`https://peaceful-everglades-42205.herokuapp.com/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // const ExactService = data.filter((td) => td._id === serviceId);

  const handleBook = () => {
    console.log(data);
    data.email = user?.email;
    // data.status = "Pending";

    fetch("https://peaceful-everglades-42205.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="container rounded mt-4 pt-5 bg-white">
      <div className="border">
        {" "}
        <div>
          <h4 className="text-center p-3">Users Information</h4>
        </div>
        <div className="border d-flex justify-content-around bg-white p-4">
          <br />
          <h3>
            <b> Username</b>: {user?.displayName}
          </h3>
          <img src="" alt="" />
          <h3>
            <b>Email</b>: {user?.email}
          </h3>
        </div>
      </div>

      <div className="card mb-3 ">
        <div className="details-container row g-0">
          <div className="col-md-4">
            <img src={data.img} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{data.name}</h1>
              <p className="card-text">{data.description}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
              <h4>Price: ${data.price}</h4>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center py-5">
          <div className="book-service-form-container">
            {/* form  */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="First Name"
                {...register("firstname", {
                  required: true,
                  maxLength: 20,
                })}
              />
              <input
                placeholder="Last Name"
                {...register("lastname", {
                  required: true,
                  maxLength: 20,
                })}
              />
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                })}
              />
              <input
                placeholder="Phone Number"
                type="number"
                {...register("number", { required: true })}
              />
              <input
                placeholder="Adress"
                {...register("adress", { required: true })}
              />

              <input className="add-service-submit" type="submit" />
            </form>
            <button
              onClick={handleBook}
              className="details-btn
                    s-details-btn text-white text-uppercase "
            >
              Book Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
