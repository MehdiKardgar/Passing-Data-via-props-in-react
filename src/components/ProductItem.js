import React from "react";

import DateOfRelease from "./DateOfRelease";
import Card from "./Card";

import "./ProductItem.css";

function ProductItem(props) {
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
}

export default ProductItem;
