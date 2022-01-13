import React, { useState, useEffect } from "react";
import axios from "axios";

import { useColorTheme } from "hooks/useColorTheme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage/HomePage";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import Spinner from "components/Spinner/Spinner";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

import transformData from "utils/transformData";
import "./App.scss";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { toggleColorTheme } = useColorTheme({
    saveInLocalStorage: true,
  });

  const onChangeTheme = () => {
    toggleColorTheme();
  };

  useEffect(() => {
    const URL = process.env.REACT_APP_HOST_URL;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const result = await axios(`${URL}/api/goods/`);

        const changedData = transformData(result.data);

        setData(changedData);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header onChangeTheme={onChangeTheme} />

        {isError && <ErrorMessage />}

        <Routes>
          <Route
            path="/"
            element={isLoading ? <Spinner /> : <HomePage data={data} />}
          />
        </Routes>
      </div>

      <Footer>
        <span>
          Автор:{" "}
          <a href="https://github.com/vadmitriev/" target="_new" rel="follow">
            Владимир Дмитриев
          </a>
        </span>
      </Footer>
    </Router>
  );
}

export default App;
