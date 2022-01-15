import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartMenu from "components/CartMenu/CartMenu";
import ItemsInCartCounter from "components/ItemsInCartCounter/ItemsInCartCounter";

import { calcTotalPrice, calcTotalCount } from "utils/utils";

import { MdOutlineShoppingCart } from "react-icons/md";
import "./CartBlock.scss";

import shopActions from "redux/shop/actions";

const CartBlock = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, isMenuVisible } = useSelector((state) => state.Shop);

  const { changeMenuVisible } = shopActions;

  const handleGotoOrderClick = () => {
    dispatch(changeMenuVisible(false));
    navigate("/order");
  };

  const totalPrice = calcTotalPrice(products);
  const totalCount = calcTotalCount(products);

  return (
    <div className="cart-block">
      <MdOutlineShoppingCart size={25} className="icon" />
      <ItemsInCartCounter count={totalCount} />
      <span className="cart-block__total-price">
        {totalPrice ? `${totalPrice} $` : ""}
      </span>
      {isMenuVisible && <CartMenu onClick={handleGotoOrderClick} />}
    </div>
  );
};

export default CartBlock;
