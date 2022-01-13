import React from "react";
import ThemeButton from "components/ThemeButton/ThemeButton";
import CartBlock from "components/CartBlock/CartBlock";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ onChangeTheme, colorTheme }) => {
  return (
    <div className="header">
      <div className="wrapper">
        <Link to="/" className="title">
          Internet Shop
        </Link>
        <div className="wrapper cart-btn-wrapper">
          <CartBlock />
        </div>
        <ThemeButton onClick={onChangeTheme} colorTheme={colorTheme} />
      </div>
    </div>
  );
};

export default Header;
