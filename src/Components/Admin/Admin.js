import React from "react";
import { Link } from "react-router-dom";
import AddBook from "../AddProduct/AddBook";

const Admin = () => {
  return (
    <div className="container d-flex align-items-center">
      <div className="w-50">
        <ul class="list-group">
          <li class="list-group-item">
            <Link to="/addproduct"> Add Product</Link>
          </li>
          <li class="list-group-item">
            <Link to="/manageproducts">Manage Product</Link>
          </li>
        </ul>
      </div>
      <div className="w-50">
        <AddBook />
      </div>
    </div>
  );
};

export default Admin;
