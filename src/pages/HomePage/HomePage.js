import React from "react";
import { useDispatch } from "react-redux";
import shopActions from "redux/shop/actions";

import ProductItem from "components/ProductItem/ProductItem";
import "./HomePage.scss";

const { addItem, removeItem } = shopActions;

const HomePage = ({ data }) => {
  const dispatch = useDispatch();

  const emptyMessage = "К сожалению, в настоящее время нет доступных товаров";

  const handleAdd = (id) => {
    dispatch(addItem(id));
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="home-page">
      {data && data.length ? (
        data.map((item) => (
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
