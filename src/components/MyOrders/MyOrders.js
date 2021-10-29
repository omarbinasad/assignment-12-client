import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/myorders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  // order cancel/delete
  const handleDelete = (id) => {
    const url = `http://localhost:5000/myorders/${user.email}`;
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
    <div>
      <h1 className="text-white text-center">
        My Total Orders: {orders.length}
      </h1>{" "}
      {orders?.map((service) => {
        <div className="col-md-6 col-lg-4">
          <div className="border border p-2 m-2">
            <h4>{service?.name}</h4>
            <h4>{service?.description}</h4>
            <h4>{service?.price}</h4>
            <button onClick={handleDelete}>Delete Order</button>
          </div>
        </div>;
      })}
    </div>
  );
};

export default MyOrders;
