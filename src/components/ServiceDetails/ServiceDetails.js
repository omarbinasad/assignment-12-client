import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { user } = useAuth();
  const { serviceId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // const ExactService = data.filter((td) => td._id === serviceId);

  const handleBook = () => {
    console.log(data);
    data.email = user?.email;
    // data.status = "Pending";

    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="container pt-5">
      {/* <h2>{user?.email}</h2> */}
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
    </div>
  );
};

export default ServiceDetails;
