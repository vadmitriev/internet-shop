import React, { useEffect } from "react";

import { useColorTheme } from "hooks/useColorTheme";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/Header/Header";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import Spinner from "components/Spinner/Spinner";
import HomePage from "pages/HomePage/HomePage";
import Footer from "components/Footer/Footer";

import { useDispatch, useSelector } from "react-redux";
import shopActions from "redux/shop/actions";
import ErrorBoundary from "./ErrorBoundary";

import "./App.scss";

const { loadDealersId, loadProducts, changeMenuVisible } = shopActions;

const App = () => {
  const dispatch = useDispatch();
  const { dealers, products, error, isLoading } = useSelector(
    (state) => state.Shop
  );

  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const { toggleColorTheme } = useColorTheme({
    saveInLocalStorage: true,
  });

  const onChangeTheme = () => {
    toggleColorTheme();
  };

  useEffect(() => {
    dispatch(loadProducts(dealers));
  }, [dispatch]);

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
                element={isLoading ? <Spinner /> : <HomePage data={products} />}
              />
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
