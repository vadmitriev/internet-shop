import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import ItemsInCartCounter from "components/ItemsInCartCounter/ItemsInCartCounter";

import { calcTotalPrice, calcTotalCount } from "utils/utils";

import { RootState } from "redux/root-reducers";

import { MdOutlineShoppingCart } from "react-icons/md";

import "./CartBlock.scss";

const CartBlock = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state: RootState) => state.Shop);

  const handleGotoOrderClick = () => {
    navigate("/order");
  };

  const totalPrice = calcTotalPrice(products);
  const totalCount = calcTotalCount(products);

  return (
    <div className="cart-block" onClick={handleGotoOrderClick}>
      <MdOutlineShoppingCart size={25} className="icon" />
      <ItemsInCartCounter count={totalCount} />
      <span className="cart-block__total-price">
        {totalPrice ? `${totalPrice} $` : ""}
      </span>
    </div>
  );
};

export default CartBlock;
