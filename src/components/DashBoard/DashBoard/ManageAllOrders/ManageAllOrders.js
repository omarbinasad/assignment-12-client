import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";

import "./ManageAllOrders.css";
// import "./Orders.css";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://peaceful-everglades-42205.herokuapp.com/allorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  // useEffect(() => {
  //   fetch(`https://peaceful-everglades-42205.herokuapp.com/myorders?email=${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data));
  // }, []);

  // order cancel/delete
  const handleDelete = (id) => {
    const url = `https://peaceful-everglades-42205.herokuapp.com/myorders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          window.confirm("Delete the item?");
          const remaining = orders.filter((order) => order._id !== id);
          setOrders(remaining);
        }
      });
  };

  return (
    <div className="manage-p-container p-5 container orders-container py-5">
      {" "}
      <h1 className="text-white text-center">Total Orders: {orders.length}</h1>
      <div className="m-service-container mb-5 p-4">
        {" "}
        <table className="table">
          {" "}
          <thead className="m-service-thead">
            <tr>
              <th className="text-white" scope="col">
                No.
              </th>
              <th className="text-white" scope="col">
                Product Image
              </th>
              <th className="text-white" scope="col">
                Product Name
              </th>
              <th className="text-white" scope="col">
                Action
              </th>
            </tr>
          </thead>
        </table>
        {orders?.map((order, i) => (
          <div key={order._id}>
            <table class="table">
              <tbody className="m-service-tbody">
                <tr>
                  <th className="" scope="row">
                    {(i += 1)}
                  </th>
                  <td>
                    <img
                      className="ms-5 m-services-img"
                      src={order.productImg}
                      alt=""
                    />{" "}
                  </td>
                  <td>
                    <h3>{order.productName}</h3>
                  </td>
                  <td className="pe-5">
                    {" "}
                    <button
                      className="m-service-dlt-btn"
                      onClick={() => handleDelete(order._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageAllOrders;
