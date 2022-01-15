import { all, takeEvery, put, call, select } from "redux-saga/effects";
import actions from "../shop/actions";
import axios from "axios";
import { transformProducts } from "utils/utils";

const URL = process.env.REACT_APP_HOST_URL;

const getDealers = (state) => state.Shop.dealers;
const getProducts = (state) => state.Shop.products;

function* loadDealersId() {
  const fetchDealers = () => axios.get(`${URL}/api/dealers/`);

  try {
    const dealers = yield call(fetchDealers);
    yield put(actions.loadProductsSuccess(dealers.data, dealers.data.length));
  } catch (e) {
    yield put(actions.loadDealersIdError(e));
  }
}

function* loadProducts({ payload = {} }) {
  const fetchProducts = async (ids = []) => {
    let link = `${URL}/api/goods/`;
    if (ids && ids.length) {
      link = `${link}/?dealers=${ids.join(",")}`;
    }
    return await axios.get(link);
  };

  try {
    let products = yield select(getProducts);

    if (!products.length) {
      const newProducts = yield call(() => fetchProducts(payload.data));
      products = transformProducts(newProducts.data);
    }

    yield put(actions.loadProductsSuccess(products, products.length));
  } catch (e) {
    console.error(e.message);
    yield put(actions.loadProductsError(e.message));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOAD_DEALERS_ID, loadDealersId),
    takeEvery(actions.LOAD_PRODUCTS, loadProducts),
  ]);
}
