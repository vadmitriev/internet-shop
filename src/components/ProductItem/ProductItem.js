import React from "react";
import ProductCover from "components/ProductCover/ProductCover";
import Button from "components/Button/Button";
import Counter from "../Counter/Counter";
import "./ProductItem.scss";

const ProductItem = ({ item, onAdd, onRemove, count = 10 }) => {
  return (
    <div className="product-item">
      <ProductCover url={item.img} alt={item.name} />
      <div className="details">
        <div className="title">{item.name}</div>
        <div className="buy">
          <div className="price">{item.price}$</div>
          {count ? (
            <Counter
              number={count}
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
