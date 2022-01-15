import actions from "./actions";

const initState = {
  isLoading: false,
  isMenuVisible: false,
  error: null,
  dealers: [],
  products: [],
};

export default function reducer(state = initState, { type, payload }) {
  const products = state.products;
  const newProducts = [];

  switch (type) {
    case actions.LOAD_DEALERS_ID:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actions.LOAD_DEALERS_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        dealers: payload.data,
      };

    case actions.LOAD_DEALERS_ID_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };

    case actions.LOAD_PRODUCTS:
      return {
        ...state,
        isLoading: true,
        error: false,
      };

    case actions.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload.data,
      };

    case actions.LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };

    case actions.ADD_ITEM:
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

    case actions.REMOVE_ITEM:
      products.map((product) => {
        if (product.id === payload.data) {
          product.count--;
        }
        newProducts.push(product);
      });
      return {
        ...state,
        products: newProducts,
      };

    case actions.REMOVE_ALL_ITEMS:
      products.map((product) => {
        product.count = 0;
        newProducts.push(product);
      });
      return {
        ...state,
        products: newProducts,
      };

    case actions.REMOVE_SELECTED_ITEMS:
      products.map((product) => {
        if (product.selected) {
          product.count = 0;
        }
        newProducts.push(product);
      });
      return {
        ...state,
        products: newProducts,
      };

    case actions.SELECT_ITEM:
      products.map((product) => {
        if (product.id === payload.data) {
          product.selected = !product.selected;
        }
        newProducts.push(product);
      });
      return {
        ...state,
        products: newProducts,
      };

    case actions.SELECT_ALL_ITEMS:
      products.map((product) => {
        product.selected = payload.data;
        newProducts.push(product);
      });
      return {
        ...state,
        products: newProducts,
      };

    case actions.CHANGE_MENU_VISIBLE:
      return {
        ...state,
        isMenuVisible: payload.data,
      };

    default:
      return state;
  }
}
