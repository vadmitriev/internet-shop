import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ThemeButton from "components/ThemeButton/ThemeButton";
import CartBlock from "components/CartBlock/CartBlock";
import { Link } from "react-router-dom";
import "./Header.scss";

import shopActions from "redux/shop/actions";

const Header = ({ onChangeTheme, colorTheme }) => {
  const dispatch = useDispatch();
  const { changeMenuVisible } = shopActions;

  const handleMenuClick = () => {
    dispatch(changeMenuVisible(true));
  };

  const escFunction = (event) => {
    if (event.keyCode === 27) {
      dispatch(changeMenuVisible(false));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-wrapper">
        <Link to="/" className="header-title">
          Internet Shop
        </Link>
        <div
          className="header-wrapper cart-btn-wrapper"
          onClick={handleMenuClick}
        >
          <CartBlock />
        </div>
        <ThemeButton onClick={onChangeTheme} colorTheme={colorTheme} />
      </div>
    </header>
  );
};

export default Header;
