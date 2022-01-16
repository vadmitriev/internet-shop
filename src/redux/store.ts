import { createStore, applyMiddleware, Middleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./root-reducers";
import sagas from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const LC_KEY = "redux-state";

interface LCMiddlewareProps extends Middleware {
  getState: () => {};
}

const localStorageMiddleware: Middleware<LCMiddlewareProps> = ({
  getState,
}) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem(LC_KEY, JSON.stringify(getState()));
    return result;
  };
};

const reHydrateStore = () => {
  const lcData = localStorage.getItem(LC_KEY);
  if (lcData) {
    return JSON.parse(lcData);
  }
};

const configStore = () => {
  const store = createStore(
    reducers,
    reHydrateStore(),
    applyMiddleware(sagaMiddleware, localStorageMiddleware)
  );

  sagaMiddleware.run(sagas);

  return store;
};

export default configStore;
