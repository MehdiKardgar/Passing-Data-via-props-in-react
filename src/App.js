import React from "react";

import Products from "./components/Products";

import "./App.css";

function App() {
  const products = [
    {
      title: "Rich dad Poor dad",
      author: "Robert T. Kiyosaki",
      price: "67",
      image: "image/Rich dad Poor dad.jpg",
      dateOfRelease: new Date(2011, 5, 12),
    },
    {
      title: "Spare",
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
      title: "The Half Moon",
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

      <div className="products">
        {products.map((product, index) => (
          <Products
            key={index}
            title={product.title} // attributes
            author={product.author}
            price={product.price}
            image={product.image}
            dateOfRelease={product.dateOfRelease}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
