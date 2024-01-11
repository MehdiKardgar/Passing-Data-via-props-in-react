import React from "react";
// import "./Products.css";
import "./products.css";
import DateOfRelease from "./DateOfRelease";
import Card from "./Card";

const Products = (props) => {
  return (
    <Card className="product">
      <div className="product-details">
        <div className="product-title">{props.title}</div>
        <div className="product-author">{props.author}</div>
        <div className="product-price">${props.price}</div>
        <DateOfRelease date={props.dateOfRelease} />
      </div>

      <div className="product-image">
        <img className="product-img" src={props.image} alt="" />
      </div>
    </Card>
  );
};

export default Products;
