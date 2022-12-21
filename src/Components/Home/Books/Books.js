import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

// const allBooks = [
//   {
//     title: "C++ object oriented programme",
//     img: "https://i.ibb.co/gJR4q9S/Object-Oriented-Programming-OOP-using-C-Riaz-Academy-com-001.png",
//     price: "300",
//     quantity: "1",
//   },
//   {
//     title: "C# programme language",
//     img: "https://i.ibb.co/t33P936/kisspng-c-the-ultimate-beginner-s-guide-microsoft-visua-studio-logos-5b2048e273c597-1405256115288424.jpg",
//     price: "400",
//     quantity: "1",
//   },
//   {
//     title: "Pythone For machine learing",
//     img: "https://i.ibb.co/5YzgW0s/download.png",
//     price: "200",
//     quantity: "1",
//   },
//   {
//     title: "Javascrip for Frontend",
//     img: "https://i.ibb.co/xYkYGLQ/download.jpg",
//     price: "250",
//     quantity: "1",
//   },
//   {
//     title: "Rust For Backend",
//     img: "https://i.ibb.co/qWwgKZN/download-4.jpg",
//     price: "450",
//     quantity: "1",
//   },
//   {
//     title: "Php for laravel",
//     img: "https://i.ibb.co/SxTDWJX/download-2.jpg",
//     price: "200",
//     quantity: "1",
//   },
//   {
//     title: "Ruby programming For Senior",
//     img: "https://i.ibb.co/NtZ0nLN/download-3.jpg",
//     price: "450",
//     quantity: "1",
//   },
//   {
//     title: "Java For App Development",
//     img: "https://i.ibb.co/x3SsGFk/download-1.jpg",
//     price: "550",
//     quantity: "1",
//   },
//   {
//     title: "Kotline Fro IOS",
//     img: "https://i.ibb.co/BZXBqzN/atomic-kotlin.webp",
//     price: "600",
//     quantity: "1",
//   },
// ];

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allbooks")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  return (
    <div className="container mt-4">
        <h3 className="text-center text-primary m-4 ">Selected Your Favourite Book</h3>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {books.map((book) => (
          <Book book={book} key={book._id}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
