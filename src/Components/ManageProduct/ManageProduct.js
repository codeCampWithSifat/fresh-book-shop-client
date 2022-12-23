import React, { useEffect, useState } from "react";

const ManageProduct = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`https://fresh-book-shop-server.vercel.app/allbooks`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  const handleDeleteBook = (id) => {
    if (window.confirm("Are You Sure ? You Want To Delete This Book")) {
      fetch(`https://fresh-book-shop-server.vercel.app/allbooks/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const restBooks = books.filter((book) => book._id !== id);
            setBooks(restBooks);
          }
        });
    }
  };
  return (
    <div className="container mt-5">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {books.map((book) => (
          <tbody key={book._id}>
            <tr>
              <th scope="row">{book.title}</th>
              <td>{book.quantity}</td>
              <td>{book.price}</td>
              <td>
                <button
                  onClick={() => handleDeleteBook(book._id)}
                  className="btn btn-danger"
                >
                  X
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageProduct;
