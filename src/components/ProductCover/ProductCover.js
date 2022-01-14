import React from "react";
import "./ProductCover.scss";

const ProductCover = ({ url, alt = "" }) => {
  return (
    <div className="product-cover">
      <img src={url} alt={alt} />
    </div>
  );
};

export default ProductCover;
