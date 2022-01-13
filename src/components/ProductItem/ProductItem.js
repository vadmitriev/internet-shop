import React from "react";
import ProductCover from "components/ProductCover/ProductCover";
import "./ProductItem.scss";

const ProductItem = ({ item }) => {
  return (
    <div className="product-item">
      <ProductCover url={item.img} />
      <div className="details">
        <div className="title">{item.name}</div>
        <div className="buy">
          <div className="price">{item.price}$</div>
          <div className="buy-btn">Добавить в корзину</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
