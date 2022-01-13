import React from "react";
import ProductItem from "components/ProductItem/ProductItem";
import "./HomePage.scss";

const HomePage = ({ data }) => {
  return (
    <div className="home-page">
      {data && data.map((item) => <ProductItem key={item.id} item={item} />)}
    </div>
  );
};

export default HomePage;
