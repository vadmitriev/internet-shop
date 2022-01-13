import React from "react";
import "./ProductCover.scss";

const ProductCover = ({ url }) => {
  return <div className="product-cover" style={{ backgroundImage: url }} />;
};

export default ProductCover;
