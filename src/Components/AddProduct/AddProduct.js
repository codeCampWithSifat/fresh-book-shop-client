import React from "react";
import { Link } from "react-router-dom";
import ManageProduct from "../ManageProduct/ManageProduct";
import AddBook from "./AddBook";

const AddProduct = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4  text-white h-100 d-block">
          <ul className="list-group mt-5">
            <li className="list-group-item " aria-current="true">
              <Link to="/manageproducts">Manage Products</Link>
            </li>
            <li className="list-group-item"><Link to="/addproduct">Add Product</Link></li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
        <div className="col-8">
          <AddBook />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
