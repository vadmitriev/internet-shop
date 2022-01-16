import React from "react";
import "./ProductCover.scss";

interface ProductCoverProps {
  url: string;
  alt?: string;
}

const ProductCover: React.FC<ProductCoverProps> = ({ url, alt = "" }) => {
  return (
    <div className="product-cover">
      <img src={url} alt={alt} />
    </div>
  );
};

export default ProductCover;
