import React from "react";
import { useDispatch } from "react-redux";
import Counter, { counterSizes } from "components/Counter/Counter";
import shopActions from "redux/shop/actions";

import "./OrderItem.scss";
import { ProductItemProps } from "types/Shop";

interface OrderItemProps {
  item: ProductItemProps;
  onCheck: () => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ item, onCheck }) => {
  const dispatch = useDispatch();
  const { addItem, removeItem } = shopActions;

  const price = Math.round(item.price * item.count * 100) / 100;

  const handleAdd = () => {
    dispatch(addItem(item.id));
  };

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div className="order-item">
      <div className="order-item-info" onClick={onCheck}>
        <div className="order-item__input-wrapper">
          <input type="checkbox" checked={item.selected} onChange={onCheck} />
        </div>
        <div className="order-item-image">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="order-item-name">{item.name}</div>
      </div>

      <div className="order-item-price">
        <div className="order-item__single-price"> {item.price} $ </div>
        <Counter
          number={item.count}
          onAdd={handleAdd}
          onRemove={handleRemove}
          size={counterSizes.medium}
        />
        <div className="order-item__total-price">{price} $</div>
      </div>
    </div>
  );
};

export default OrderItem;
