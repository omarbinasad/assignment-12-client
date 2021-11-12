import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./../../../ManageServices/ManageProducts.css";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-everglades-42205.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://peaceful-everglades-42205.herokuapp.com/products/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          window.confirm("Are You Sure to Delete the Item?");
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        }
      });
  };
  return (
    <div className="manage-p-container p-5 container">
      <h2 className="text-center text-white py-5">Manage Products</h2>

      <div className="m-service-container mb-5 p-4">
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
        {products.map((product, i) => (
          <div key={product._id}>
            <table class="table">
              <tbody className="m-service-tbody">
                <tr>
                  <th className="" scope="row">
                    {(i += 1)}
                  </th>
                  <td>
                    <img
                      className="ms-5 m-services-img"
                      src={product.img}
                      alt=""
                    />{" "}
                  </td>
                  <td>
                    <h3>{product.name}</h3>
                  </td>
                  <td className="pe-5">
                    {" "}
                    <button
                      className="m-service-dlt-btn"
                      onClick={() => handleDelete(product._id)}
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
      <br />
      <div></div>
    </div>
  );
};

export default ManageProduct;
