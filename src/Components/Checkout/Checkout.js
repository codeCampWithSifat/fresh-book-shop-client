import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/allbooks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        console.log(data);
      });
  }, [id]);
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">{book.title}</td>
            <td>{book.quantity}</td>
            <td>${book.price}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center mt-4">
         <button className="btn btn-danger">Order Now</button>
      </div>
    </div>
  );
};

export default Checkout;
