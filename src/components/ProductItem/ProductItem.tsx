import React from "react";
import ProductCover from "components/ProductCover/ProductCover";
import Button, { buttonTypes } from "components/Button/Button";
import Counter, { counterSizes } from "components/Counter/Counter";

import "./ProductItem.scss";
import { ProductItemProps } from "types/Shop";

interface ProductItemComponentProps {
  item: ProductItemProps;
  onAdd: () => void;
  onRemove: () => void;
}

const ProductItem: React.FC<ProductItemComponentProps> = ({
  item,
  onAdd,
  onRemove,
}) => {
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
              size={counterSizes.medium}
            />
          ) : (
            <Button type={buttonTypes.primary} onClick={onAdd}>
              В корзину
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
