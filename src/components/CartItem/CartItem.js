import React from "react";
import { useDispatch } from "react-redux";
import Counter from "components/Counter/Counter";

import shopActions from "redux/shop/actions";

import "./CartItem.scss";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { addItem, removeItem } = shopActions;

  const handleAdd = (id) => {
    dispatch(addItem(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const price = Math.round(item.count * item.price * 100) / 100;

  return (
    <>
      {item.count > 0 && (
        <div className="cart-item">
          <div className="cart-item__title">{item.name}</div>

          <Counter
            onAdd={() => handleAdd(item.id)}
            onRemove={() => handleRemove(item.id)}
            number={item.count}
            size="s"
          />
          <div className="cart-item__price">{price} $</div>
        </div>
      )}
    </>
  );
};

export default CartItem;
