import { all, takeEvery, put, call, select } from "redux-saga/effects";
import actions from "../shop/actions";
import { nanoid } from "nanoid";
import axios from "axios";

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

  const transformData = (data) => {
    return (
      data &&
      data.map((item) => {
        return {
          id: nanoid(),
          name: item.name,
          price: item.price,
          count: 0,
          img: `${URL}${item.image}`,
        };
      })
    );
  };

  try {
    let products = yield select(getProducts);

    if (!products.length) {
      const newProducts = yield call(() => fetchProducts(payload.data));
      products = transformData(newProducts.data);
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
