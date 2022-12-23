import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderInfo = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // axios.post("https://fresh-book-shop-server.vercel.app/order", data)
    // .then((response) => {
    //   console.log(response);
    //   if (response.insertedId) {
    //     reset();
    //     toast("Your Order Palce Successfully");
    //   }
    // });
    fetch(`https://fresh-book-shop-server.vercel.app/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.insertedId) {
            reset()
            toast("Your Order Place Successfully");
        }
      });
  };
  useEffect(() => {
    fetch(`https://fresh-book-shop-server.vercel.app/allbooks/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
      });
  }, [id]);
  return (
    <div className="container w-50 mx-auto">
      <h3 className="text-primary m-4 text-center">This Is Your Order Info</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          className="form-control my-3 w-100"
          {...register("name", { required: true })}
          defaultValue={user.displayName}
          readOnly
        />
        <input
          placeholder="Email"
          className="form-control my-3 w-100"
          {...register("email", { required: true })}
          defaultValue={user.email}
          readOnly
        />
        <input
          placeholder="Product Id"
          className="form-control my-3 w-100"
          {...register("product_id", { required: true })}
          defaultValue={id}
          readOnly
        />
        <input
          placeholder="Product Price"
          className="form-control my-3 w-100"
          {...register("product_price", { required: true })}
          defaultValue={book.price}
        />
        <input
          placeholder="Your Address"
          className="form-control my-3 w-100"
          {...register("address", { required: true })}
        />
        <input
          placeholder="Phone Number"
          className="form-control my-3 w-100"
          {...register("phone", { required: true })}
        />
        <input
          type="submit"
          value="Order Info"
          className="btn btn-danger w-100"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default OrderInfo;
