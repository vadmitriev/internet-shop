import React from "react";
import ProductCover from "components/ProductCover/ProductCover";
import Button from "components/Button/Button";
import Counter from "../Counter/Counter";

import "./ProductItem.scss";

const ProductItem = ({ item, onAdd, onRemove }) => {
  return (
    <div className="product-item">
      <ProductCover url={item.img} alt={item.name} />
      <div className="product-item-details">
        <div className="product-item-title">{item.name}</div>
        <div className="product-item-buy">
          <div className="product-item-price">{item.price}$</div>
          {item.count ? (
            <Counter
              number={item.count}
              onAdd={onAdd}
              onRemove={onRemove}
              size="m"
            />
          ) : (
            <Button type="primary" onClick={onAdd}>
              В корзину
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
