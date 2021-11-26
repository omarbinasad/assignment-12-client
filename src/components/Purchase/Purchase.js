import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import "./Purchase.css";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";
import useAuth from "../../hooks/useAuth";

const Purchase = () => {
  const { user } = useAuth();
  const { productId } = useParams();
  const [data, setData] = useState({});
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    fetch(
      `https://peaceful-everglades-42205.herokuapp.com/products/${productId}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const onSubmit = (data) => {
    data.email = user?.email;

    fetch("https://peaceful-everglades-42205.herokuapp.com/addOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order Processed Successfully");
          reset();
        }
      });
  };

  // const handleBook = () => {
  //   console.log(data);
  //   data.email = user?.email;
  //   // data.status = "Pending";

  //   fetch("https://peaceful-everglades-42205.herokuapp.com/addOrder", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result.insertedId) {
  //         alert("Order Processed Successfully");
  //         reset();
  //       }
  //     });
  // };

  return (
    <div>
      <Header></Header>
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
              <img
                src={data.img}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{data.name}</h1>
                <p className="card-text">{data.description}</p>

                <h4>Price: ${data.price}</h4>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center py-5">
            <div className="book-service-form-container">
              {/* form  */}

              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="p-default-value"
                  defaultValue={data.name}
                  placeholder="Product Name"
                  {...register("productName", {
                    required: true,
                  })}
                />

                <input
                  className="p-default-value"
                  defaultValue={data.img}
                  placeholder="Product image"
                  {...register("productImg", {
                    required: true,
                  })}
                />

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

                <input className="bg-primary text-white" type="submit" />
              </form>
              {/* <button
                onClick={handleBook}
                className="details-btn
                    s-details-btn text-white text-uppercase "
              >
                Order Confirm
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Purchase;
