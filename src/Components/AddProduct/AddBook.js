import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBook = () => {
  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = (data) => {
    
    fetch("http://localhost:5000/addbook", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId) {
            reset()
            toast("Insert Your Data Successfully");
        }
    })
  };
  return (
    <div className="container mx-5">
      <h4 className="text-primary text-center mt-4">Add Your Favourite Book</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control   my-3"
          placeholder="Book Name"
          {...register("title", { required: true })}
        />
        <input
          className="form-control   my-3"
          placeholder="Image Url Link"
          {...register("img", { required: true })}
        />
        <input
          className="form-control   my-3"
          placeholder="Price"
          type="number"
          {...register("price", { min: 100, max: 1000 })}
        />
        <input
          className="form-control  my-3"
          placeholder="Quantity"
          type="number"
          {...register("quantity", { required: true })}
        />
        <input type="submit" value="Add Book" className="btn btn-danger" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddBook;
