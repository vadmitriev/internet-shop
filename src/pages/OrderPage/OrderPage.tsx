import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import OrderItem from "components/OrderItem/OrderItem";
import Button, { buttonSizes, buttonTypes } from "components/Button/Button";

import shopActions from "redux/shop/actions";
import { RootState } from "redux/store";

import { calcTotalPrice } from "utils/utils";

import { ProductItemProps } from "types/Shop";

import "./OrderPage.scss";

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state: RootState) => state.Shop);
  const {
    removeAllItems,
    selectItem,
    selectAllItems,
    removeSelectedItems,
    changeMenuVisible,
  } = shopActions;

  const [allSelected, setAllSelected] = useState(false);

  const productsInCart = products.filter(
    (product: ProductItemProps) => product.count > 0
  );
  const selectedProducts = productsInCart.filter(
    (product: ProductItemProps) => product.selected
  );

  const totalPrice = calcTotalPrice(productsInCart);

  useEffect(() => {
    dispatch(changeMenuVisible(false));
    dispatch(selectAllItems(false));
  }, [dispatch, changeMenuVisible, selectAllItems]);

  const handleClick = () => {
    navigate("/");
  };

  if (!productsInCart.length) {
    return (
      <div className="order-page__empty">
        <div className="order-page__empty-text">Корзина пуста</div>
        <div className="order-page__empty-btn-wrapper">
          <Button
            type={buttonTypes.primary}
            size={buttonSizes.large}
            onClick={handleClick}
          >
            На главную
          </Button>
        </div>
      </div>
    );
  }

  const handleSelectItem = (id: string) => {
    dispatch(selectItem(id));
  };

  const handleDeleteClick = () => {
    dispatch(removeSelectedItems());
  };

  const handleSelectAll = () => {
    setAllSelected(!allSelected);
    dispatch(selectAllItems(!allSelected));
  };

  const handleOrderClick = () => {
    dispatch(removeAllItems());
    dispatch(changeMenuVisible(false));
    dispatch(selectAllItems(false));
    navigate("/");
  };

  return (
    <div className="order-page">
      <div className="order-page__select-all">
        <div className="order-page__select-all-left" onClick={handleSelectAll}>
          <input type="checkbox" checked={allSelected} />
          <span>Выбрать все</span>
        </div>
        <div className="order-page__select-all-right">
          {selectedProducts.length > 0 && (
            <Button
              size={buttonSizes.medium}
              type={buttonTypes.danger}
              onClick={handleDeleteClick}
            >
              Удалить выбранные
            </Button>
          )}
        </div>
      </div>
      <div className="order-page__product-list">
        {productsInCart.map((item: ProductItemProps) => (
          <OrderItem
            key={item.id}
            item={item}
            onCheck={() => handleSelectItem(item.id)}
          />
        ))}
      </div>
      <div className="order-page-buy">
        <div className="order-page-buy__total-price">
          <span>Итого:</span>
          <span>{totalPrice} $</span>
        </div>
        <Button
          onClick={handleOrderClick}
          size={buttonSizes.medium}
          type={buttonTypes.primary}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default OrderPage;
