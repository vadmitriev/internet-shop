import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configStore from "./redux/store";

import "./index.css";

const app = {
  start: function ({ dealers = null }) {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={configStore()}>
          <App dealers={dealers} />
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  },
};

(window as any).app = app;
