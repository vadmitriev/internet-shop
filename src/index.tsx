import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configStore from "./redux/store";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
