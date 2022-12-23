import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Checkout = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:5000/allbooks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        console.log(data);
      });
  }, [id]);
  const handleOrderInfo = (id) => {
    navigate(`/orderinfo/${id}`);
  };
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
        <button
          onClick={() => handleOrderInfo(book._id)}
          className="btn btn-danger"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
