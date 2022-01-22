import { all, takeEvery, put, call, select } from "redux-saga/effects";
import { actions, ShopActionTypes } from "./actions";
import axios from "axios";
import { isArraysEqual, transformProducts } from "utils/utils";
import { DealersProps, ProductItemProps } from "types/Shop";
import { ResponseGenerator } from "types/Generator";
import { RootState } from "../root-reducers";

const URL = process.env.REACT_APP_HOST_URL;

const getProducts = (state: RootState) => state.Shop.products;
const getDealers = (state: RootState) => state.Shop.dealers;

function* loadProducts({ payload = {} }: any) {
  const fetchProducts = async (ids = []) => {
    let link = `${URL}/api/goods/`;
    if (ids && ids.length) {
      link = `${link}/?dealers=${ids.join(",")}`;
    }
    return await axios.get(link);
  };

  try {
    let products: ProductItemProps[] = yield select(getProducts);
    const dealers: DealersProps[] = yield select(getDealers);
    const needLoadAgain = !isArraysEqual(dealers, payload.data);

    if (!products || !products.length || needLoadAgain) {
      const newProducts: ResponseGenerator = yield call(() =>
        fetchProducts(payload.data)
      );
      products = transformProducts(newProducts.data);
    }

    yield put(actions.loadProductsSuccess(products, products.length));
  } catch (e: any) {
    console.error(e.message);
    yield put(actions.loadProductsError(e.message));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(ShopActionTypes.LOAD_PRODUCTS, loadProducts)]);
}
