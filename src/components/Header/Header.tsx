import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import ThemeButton from "components/ThemeButton/ThemeButton";
import CartBlock from "components/CartBlock/CartBlock";
import { Link } from "react-router-dom";
import "./Header.scss";

import shopActions from "redux/shop/actions";
import { COLOR_THEME } from "hooks/useColorTheme";

interface HeaderProps {
  onChangeTheme: () => void;
  colorTheme?: COLOR_THEME;
}

const Header: React.FC<HeaderProps> = ({ onChangeTheme, colorTheme }) => {
  const dispatch = useDispatch();
  const { changeMenuVisible } = shopActions;

  const handleMenuClick = () => {
    dispatch(changeMenuVisible(true));
  };

  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dispatch(changeMenuVisible(false));
      }
    },
    [dispatch, changeMenuVisible]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

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
        <ThemeButton onClick={onChangeTheme} />
      </div>
    </header>
  );
};

export default Header;
