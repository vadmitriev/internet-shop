import { ShopActionTypes } from "./actions";
import { ProductItemProps, ShopState, ShopAction } from "types/Shop";

const initState: ShopState = {
  isLoading: false,
  error: null,
  dealers: [],
  products: [],
};

export default function reducer(state = initState, action: ShopAction) {
  const products = state.products;
  const newProducts: ProductItemProps[] = [];

  const { type, payload } = action;

  switch (type) {
    case ShopActionTypes.SET_DEALERS_ID:
      return {
        ...state,
        dealers: payload.data,
      };

    case ShopActionTypes.LOAD_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case ShopActionTypes.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload.data,
      };

    case ShopActionTypes.LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };

    case ShopActionTypes.ADD_ITEM:
      products.forEach((product) => {
        if (product.id === payload.data) {
          product.count++;
        }
        newProducts.push(product);
      });

      return {
        ...state,
        products: newProducts,
      };

    case ShopActionTypes.REMOVE_ITEM:
      products.forEach((product) => {
        if (product.id === payload.data) {
          product.count--;
        }
        newProducts.push(product);
      });
      return {
        ...state,
        products: newProducts,
      };

    case ShopActionTypes.REMOVE_ALL_ITEMS:
      products.forEach((product) => {
        product.count = 0;
        newProducts.push(product);
      });
      return {
        ...state,
        products: newProducts,
      };

    case ShopActionTypes.REMOVE_SELECTED_ITEMS:
      products.forEach((product) => {
        if (product.selected) {
          product.count = 0;
        }
        newProducts.push(product);
      });
      return {
        ...state,
        products: newProducts,
      };

    case ShopActionTypes.SELECT_ITEM:
      products.forEach((product) => {
        if (product.id === payload.data) {
          product.selected = !product.selected;
        }
        newProducts.push(product);
      });
      return {
        ...state,
        products: newProducts,
      };

    case ShopActionTypes.SELECT_ALL_ITEMS:
      products.forEach((product) => {
        product.selected = payload.data;
        newProducts.push(product);
      });
      return {
        ...state,
        products: newProducts,
      };

    default:
      return state;
  }
}
