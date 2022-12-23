import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const email = user.email ;
    fetch(`https://fresh-book-shop-server.vercel.app/order?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, [user]);
  return (
    <div className="container">
      <table class="table">
        <thead className="text-center">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Product-Id</th>
            <th scope="col">Price</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody key={order._id}>
            <tr>
              <th scope="row">{order.name}</th>
              <td>{order.email}</td>
              <td>{order.product_id}</td>
              <td>{order.product_price}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Order;
