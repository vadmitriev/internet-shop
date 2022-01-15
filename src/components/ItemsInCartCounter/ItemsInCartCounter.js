import React from "react";
import "./ItemsInCartCounter.scss";

const ItemsInCartCounter = ({ count = 0 }) => {
  return count > 0 ? <div className="items-in-cart">{count}</div> : null;
};

export default ItemsInCartCounter;
