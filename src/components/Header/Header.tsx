import React from "react";
import ThemeButton from "components/ThemeButton/ThemeButton";
import CartBlock from "components/CartBlock/CartBlock";
import { Link } from "react-router-dom";
import "./Header.scss";

interface HeaderProps {
  onChangeTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onChangeTheme }) => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <Link to="/" className="header-title">
          Internet Shop
        </Link>
        <div className="header-wrapper cart-btn-wrapper">
          <CartBlock />
        </div>
        <ThemeButton onClick={onChangeTheme} />
      </div>
    </header>
  );
};

export default Header;
