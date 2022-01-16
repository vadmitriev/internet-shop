import React from "react";
import { useDispatch } from "react-redux";
import Counter, { counterSizes } from "components/Counter/Counter";

import shopActions from "redux/shop/actions";

import "./CartItem.scss";

import { ProductItemProps } from "types/Shop";

interface CartItemProps {
  item: ProductItemProps;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const { addItem, removeItem } = shopActions;

  const handleAdd = (id: string) => {
    dispatch(addItem(id));
  };

  const handleRemove = (id: string) => {
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
            size={counterSizes.small}
          />
          <div className="cart-item__price">{price} $</div>
        </div>
      )}
    </>
  );
};

export default CartItem;
