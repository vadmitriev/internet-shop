import React from "react";
import "./ItemsInCart.scss";

const ItemsInCart = ({ count = 0 }) => {
  return count > 0 ? <div className="items-in-cart">{count}</div> : null;
};

export default ItemsInCart;
