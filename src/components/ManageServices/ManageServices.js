import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ManageServices.css";

const ManageSercices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          window.confirm("Delete the item?");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div className="container">
      <h2 className="text-center text-white py-5">Manage Services</h2>

      <div className="m-service-container p-4">
        <table className="table">
          {" "}
          <thead className="m-service-thead">
            <tr>
              <th className="text-white" scope="col">
                No.
              </th>
              <th className="text-white" scope="col">
                image
              </th>
              <th className="text-white" scope="col">
                Pakage Name
              </th>
              <th className="text-white" scope="col">
                Action
              </th>
            </tr>
          </thead>
        </table>
        {services.map((service, i) => (
          <div key={service._id}>
            <table class="table">
              <tbody className="m-service-tbody">
                <tr>
                  <th className="" scope="row">
                    {i}
                  </th>
                  <td>
                    <img
                      className="ms-5 m-services-img"
                      src={service.img}
                      alt=""
                    />{" "}
                  </td>
                  <td>
                    <h3>{service.name}</h3>
                  </td>
                  <td className="pe-5">
                    {" "}
                    <button
                      className="m-service-dlt-btn"
                      onClick={() => handleDelete(service._id)}
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

export default ManageSercices;
