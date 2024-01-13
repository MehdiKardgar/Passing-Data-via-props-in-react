import React from "react";

import Card from "./Card";
import "./Products.css";

import ProductItem from "./ProductItem";

const Products = (props) => {
  return (
    <Card className="products">
      {props.items.map((item, index) => (
        <ProductItem
          key={index}
          title={item.title} // attributes
          author={item.author}
          price={item.price}
          image={item.image}
          dateOfRelease={item.dateOfRelease}
        />
      ))}
    </Card>
  );
};

export default Products;
