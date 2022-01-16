import { all, takeEvery, put, call, select } from "redux-saga/effects";
import { actions, ShopActionTypes } from "./actions";
import axios from "axios";
import { transformProducts } from "utils/utils";
import { ProductItemProps, ShopState } from "types/Shop";

const URL = process.env.REACT_APP_HOST_URL;

const getProducts = (state: ShopState) => state.products;

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

    if (!products || !products.length) {
      // @ts-ignore
      const newProducts = yield call(() => fetchProducts(payload.data));
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
