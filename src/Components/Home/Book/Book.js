import React from "react";
import { useNavigate } from "react-router-dom";

const Book = ({ book }) => {
  const { img, title, price , _id} = book;
  const navigate = useNavigate();
  const handleBuyNow = (id) => {
    console.log(id)
    navigate(`/checkout/${id}`)
    
  }

  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top w-100" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h4 className="card-text">Price : ${price}</h4>
        </div>
        <div className="text-center my-4">
          <button onClick={() => handleBuyNow(_id)} className="btn btn-danger">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
