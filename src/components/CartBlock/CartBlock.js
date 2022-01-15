import React from "react";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import CartMenu from "components/CartMenu/CartMenu";
import ItemsInCart from "components/ItemsInCart/ItemsInCart";

import { calcTotalPrice, calcTotalCount } from "utils/utils";
import "./CartBlock.scss";

const CartBlock = () => {
  const { products, isMenuVisible } = useSelector((state) => state.Shop);
  const totalPrice = calcTotalPrice(products);
  const totalCount = calcTotalCount(products);

  return (
    <div className="cart-block">
      <MdOutlineShoppingCart size={25} className="icon" />
      <ItemsInCart count={totalCount} />
      <span className="total-price">{totalPrice ? `${totalPrice} $` : ""}</span>
      {isMenuVisible && <CartMenu />}
    </div>
  );
};

export default CartBlock;
