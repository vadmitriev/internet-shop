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

import { DealersProps } from "./types/Shop";
import { RootState } from "./redux/root-reducers";

import "./App.scss";

const { setDealersId, loadProducts } = shopActions;

interface AppProps {
  dealers?: DealersProps[] | null;
}

const App: React.FC<AppProps> = ({ dealers = null }) => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state: RootState) => state.Shop);

  const { toggleColorTheme } = useColorTheme({
    saveInLocalStorage: true,
  });

  const onChangeTheme = () => {
    toggleColorTheme();
  };

  useEffect(() => {
    dispatch(setDealersId(dealers));
    dispatch(loadProducts(dealers));
  }, [dispatch, dealers]);

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Header onChangeTheme={onChangeTheme} />

          {error && <ErrorMessage />}

          <div className="content-wrapper">
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
