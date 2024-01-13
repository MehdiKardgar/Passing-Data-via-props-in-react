import React from "react";

import Products from "./components/Products";
import "./App.css";

function App() {
  const products = [
    {
      title: "rich dad poor dad",
      author: "Robert T. Kiyosaki",
      price: "67",
      image: "image/Rich dad Poor dad.jpg",
      dateOfRelease: new Date(2011, 5, 12),
    },
    {
      title: "spare",
      author: "Prince Harry",
      price: "39",
      image: "image/Spare.jpg",
      dateOfRelease: new Date(2020, 8, 2),
    },
    {
      title: "really good actually",
      author: "Monica Heisey",
      price: "95",
      image: "image/really good actually.jpg",
      dateOfRelease: new Date(2022, 1, 29),
    },
    {
      title: "blue",
      author: "Victor Zugg",
      price: "130",
      image: "image/blue.jpg",
      dateOfRelease: new Date(2019, 12, 11),
    },
    {
      title: "The half moon",
      author: "Mary Beth Keane",
      price: "49",
      image: "image/The Half Moon.webp",
      dateOfRelease: new Date(2015, 4, 18),
    },
    {
      title: "blue hour",
      author: "Tiffany Clarke Harrison",
      price: "83",
      image: "image/blue hour.jpeg",
      dateOfRelease: new Date(2014, 8, 25),
    },
  ];

  return (
    <div className="App">
      <h1>Passing Data via props</h1>
      <Products items={products} />
    </div>
  );
}

export default App;
