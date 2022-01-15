import React from "react";
import { useSelector } from "react-redux";
import CartItem from "components/CartItem/CartItem";
import Button from "components/Button/Button";

import { calcTotalPrice } from "utils/utils";
import "./CartMenu.scss";

const CartMenu = ({ onClick }) => {
  const { products } = useSelector((state) => state.Shop);
  const totalPrice = calcTotalPrice(products);

  const productsInCart = products.filter((product) => product.count > 0);

  return (
    <div className="cart-menu">
      <div className="cart-menu-title">Корзина</div>
      <div className="cart-menu-list">
        {productsInCart.length
          ? products.map((product) => (
              <CartItem key={product.id} item={product} />
            ))
          : "Корзина пуста"}
      </div>
      {productsInCart.length ? (
        <div className="cart-menu-result">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{totalPrice} $</span>
          </div>
          <div className="cart-menu__order">
            <Button type="primary" size="s" onClick={onClick}>
              Оформить заказ
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
