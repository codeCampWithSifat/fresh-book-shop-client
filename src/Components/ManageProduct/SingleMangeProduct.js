import React from "react";

const SingleMangeProduct = ({ book }) => {
    
  const { title, quantity, price, _id } = book;
  const handleDeleteProduct = (id) => {
    fetch(`https://fresh-book-shop-server.vercel.app/allbooks/${id}`, {
        method : "DELETE"
    })
    .then(res => res.json())
    .then(data => {
       console.log(data);
    })
  };
  return (
    <tbody>
      <tr>
        <th scope="row">{title}</th>
        <td>{quantity}</td>
        <td>{price}</td>
        <td>
          <button
            onClick={() => handleDeleteProduct(_id)}
            className="btn btn-danger"
          >
            X
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default SingleMangeProduct;
