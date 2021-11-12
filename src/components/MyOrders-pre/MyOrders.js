// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import useAuth from "../../hooks/useAuth";

// const MyOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const { user } = useAuth();

//   useEffect(() => {
//     fetch(`https://peaceful-everglades-42205.herokuapp.com/myorders/${user.email}`)
//       .then((res) => res.json())
//       .then((data) => setOrders(data));
//   }, [user.email]);
//   // useEffect(() => {
//   //   fetch(`https://peaceful-everglades-42205.herokuapp.com/myorders?email=${user.email}`)
//   //     .then((res) => res.json())
//   //     .then((data) => setOrders(data));
//   // }, []);

//   // order cancel/delete
//   const handleDelete = (id) => {
//     const url = `https://peaceful-everglades-42205.herokuapp.com/myorders/${user.email}`;
//     fetch(url, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.deletedCount) {
//           window.confirm("Delete the item?");
//           const remaining = orders.filter((order) => order._id !== id);
//           setOrders(remaining);
//         }
//       });
//   };
//   return (
//     <div style={{ height: "60vh" }}>
//       <h1 className="text-white text-center">
//         My Total Orders: {orders.length}
//       </h1>{" "}
//       {orders?.map((product) => {
//         <div className="col-md-6 col-lg-4">
//           <div className="border border p-2 m-2">
//             <h4>{product?.name}</h4>
//             <h4>{product?.description}</h4>
//             <h4>{product?.price}</h4>
//             <img src={product.img} alt="" />
//             <button onClick={handleDelete}>Delete Order</button>
//           </div>
//         </div>;
//       })}
//     </div>
//   );
// };

// export default MyOrders;
