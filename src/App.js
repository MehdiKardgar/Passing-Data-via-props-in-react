import React from "react";

import Products from "./components/products";

import "./App.css";

function App() {
  const products = [
    {
      title: "Rich dad Poor dad",
      author: "Robert T. Kiyosaki",
      price: "67",
      image: "image/Rich dad Poor dad.jpg",
    },
    {
      title: "Spare",
      author: "Prince Harry",
      price: "39",
      image: "image/Spare.jpg",
    },
    {
      title: "really good actually",
      author: "Monica Heisey",
      price: "95",
      image: "image/really good actually.jpg",
    },
    {
      title: "blue",
      author: "Victor Zugg",
      price: "130",
      image: "image/blue.jpg",
    },
    {
      title: "The Half Moon",
      author: "Mary Beth Keane",
      price: "49",
      image: "image/The Half Moon.webp",
    },
    {
      title: "blue hour",
      author: "Tiffany Clarke Harrison",
      price: "83",
      image: "image/blue hour.jpeg",
    },
  ];

  return (
    <div className="App">
      <h1>Passing Data via props</h1>

      <div className="products">
        {products.map((product, index) => (
          <Products
            key={index}
            title={product.title}
            author={product.author}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
