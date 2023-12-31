import React from "react";
import "./products.css"; // Import the CSS file

const Products = (props) => {
  return (
    <div className="product">
      <div className="left-part">
        <div className="product-title">{props.title}</div>
        <div className="product-author">{props.author}</div>
        <div className="product-price">${props.price}</div>
      </div>

      <div className="right-part">
        <img className="product-img" src={props.image} alt="d" />
      </div>
    </div>
  );
};

export default Products;
