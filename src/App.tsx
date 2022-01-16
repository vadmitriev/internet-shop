import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useColorTheme } from "hooks/useColorTheme";
import Header from "components/Header/Header";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import Spinner from "components/Spinner/Spinner";
import HomePage from "pages/HomePage/HomePage";
import OrderPage from "pages/OrderPage/OrderPage";
import Footer from "components/Footer/Footer";
import ErrorBoundary from "./ErrorBoundary";

import { useDispatch, useSelector } from "react-redux";
import shopActions from "redux/shop/actions";
import { RootState } from "redux/store";

import "./App.scss";

const { loadDealersId, loadProducts, changeMenuVisible } = shopActions;

const App = () => {
  const dispatch = useDispatch();
  const { dealers, error, isLoading } = useSelector(
    (state: RootState) => state.Shop
  );

  const { toggleColorTheme } = useColorTheme({
    saveInLocalStorage: true,
  });

  const onChangeTheme = () => {
    toggleColorTheme();
  };

  useEffect(() => {
    dispatch(loadProducts(dealers));
  }, [dispatch, dealers]);

  const handleContentClick = () => {
    dispatch(changeMenuVisible(false));
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Header onChangeTheme={onChangeTheme} />

          {error && <ErrorMessage />}

          <div className="content-wrapper" onClick={handleContentClick}>
            <Routes>
              <Route
                path="/"
                element={isLoading ? <Spinner /> : <HomePage />}
              />
              <Route path="/order" element={<OrderPage />} />
            </Routes>
          </div>

          {!error && (
            <Footer>
              <span>
                Выполнил:{" "}
                <a
                  href="https://github.com/vadmitriev/"
                  target="_new"
                  rel="follow"
                >
                  Владимир Дмитриев
                </a>
              </span>
            </Footer>
          )}
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
