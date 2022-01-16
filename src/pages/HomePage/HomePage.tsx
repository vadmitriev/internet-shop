import React from "react";
import { useDispatch, useSelector } from "react-redux";
import shopActions from "redux/shop/actions";

import ProductItem from "components/ProductItem/ProductItem";
import "./HomePage.scss";

import { ProductProps } from "types/OrderItem";

const HomePage = () => {
  const { addItem, removeItem } = shopActions;
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.Shop);

  const emptyMessage = "К сожалению, в настоящее время нет доступных товаров";

  const handleAdd = (id: string) => {
    dispatch(addItem(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="home-page">
      {products && products.length ? (
        products.map((item: ProductProps) => (
          <ProductItem
            key={item.id}
            item={item}
            onAdd={() => handleAdd(item.id)}
            onRemove={() => handleRemove(item.id)}
          />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>{emptyMessage}</h1>
      )}
    </div>
  );
};

export default HomePage;
