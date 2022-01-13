import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./CartBlock.scss";

const CartBlock = () => {
  return (
    <div className="cart-block">
      <MdOutlineShoppingCart size={25} className="icon" />
      <span className="total-price">2321 руб. </span>
    </div>
  );
};

export default CartBlock;
