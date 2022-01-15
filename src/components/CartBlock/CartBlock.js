import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./CartBlock.scss";
import { calcTotalPrice } from "../../utils/utils";
import CartMenu from "../CartMenu/CartMenu";

const CartBlock = () => {
  const { products, isMenuVisible } = useSelector((state) => state.Shop);
  const totalPrice = calcTotalPrice(products);

  return (
    <div className="cart-block">
      <MdOutlineShoppingCart size={25} className="icon" />
      <span className="total-price">{totalPrice ? `${totalPrice} $` : ""}</span>
      {isMenuVisible && <CartMenu />}
    </div>
  );
};

export default CartBlock;
