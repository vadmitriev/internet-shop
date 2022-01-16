import React from "react";
import { useSelector } from "react-redux";
import CartItem from "components/CartItem/CartItem";
import Button, { buttonSizes, buttonTypes } from "components/Button/Button";

import { calcTotalPrice } from "utils/utils";
import "./CartMenu.scss";
import { ProductItemProps } from "types/Shop";

interface CartMenuProps {
  onClick: () => void;
}

const CartMenu: React.FC<CartMenuProps> = ({ onClick }) => {
  const { products } = useSelector((state: any) => state.Shop);
  const totalPrice = calcTotalPrice(products);

  const productsInCart = products.filter(
    (product: ProductItemProps) => product.count > 0
  );

  return (
    <div className="cart-menu">
      <div className="cart-menu-title">Корзина</div>
      <div className="cart-menu-list">
        {productsInCart.length
          ? products.map((product: ProductItemProps) => (
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
            <Button
              type={buttonTypes.primary}
              size={buttonSizes.small}
              onClick={onClick}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
