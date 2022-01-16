import { DealersProps, ProductItemProps } from "types/Shop";

export enum ShopActionTypes {
  LOAD_DEALERS_ID = "LOAD_DEALERS_ID",
  LOAD_DEALERS_ID_SUCCESS = "LOAD_DEALERS_ID_SUCCESS",
  LOAD_DEALERS_ID_ERROR = "LOAD_DEALERS_ID_ERROR",
  LOAD_PRODUCTS = "LOAD_PRODUCTS",
  LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS",
  LOAD_PRODUCTS_ERROR = "LOAD_PRODUCTS_ERROR",

  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  SELECT_ITEM = "SELECT_ITEM",
  SELECT_ALL_ITEMS = "SELECT_ALL_ITEMS",
  REMOVE_SELECTED_ITEMS = "REMOVE_SELECTED_ITEMS",
  REMOVE_ALL_ITEMS = "REMOVE_ALL_ITEMS",

  CHANGE_MENU_VISIBLE = "CHANGE_MENU_VISIBLE",
}

export const actions = {
  loadDealersId: () => ({
    type: ShopActionTypes.LOAD_DEALERS_ID,
  }),

  loadDealersIdSuccess: (data: DealersProps[], totalItems: number) => ({
    type: ShopActionTypes.LOAD_DEALERS_ID_SUCCESS,
    payload: { data, totalItems },
  }),

  loadDealersIdError: (error: Error | string | boolean) => ({
    type: ShopActionTypes.LOAD_DEALERS_ID_ERROR,
    payload: { error },
  }),

  loadProducts: (data: any) => ({
    type: ShopActionTypes.LOAD_PRODUCTS,
    payload: { data },
  }),

  loadProductsSuccess: (data: ProductItemProps[], totalItems: number) => ({
    type: ShopActionTypes.LOAD_PRODUCTS_SUCCESS,
    payload: { data, totalItems },
  }),

  loadProductsError: (error: Error | string | boolean) => ({
    type: ShopActionTypes.LOAD_PRODUCTS_ERROR,
    payload: { error },
  }),

  addItem: (data: string) => ({
    type: ShopActionTypes.ADD_ITEM,
    payload: { data },
  }),

  removeItem: (data: string) => ({
    type: ShopActionTypes.REMOVE_ITEM,
    payload: { data },
  }),

  selectItem: (data: string) => ({
    type: ShopActionTypes.SELECT_ITEM,
    payload: { data },
  }),

  selectAllItems: (data: boolean) => ({
    type: ShopActionTypes.SELECT_ALL_ITEMS,
    payload: { data },
  }),

  removeSelectedItems: () => ({
    type: ShopActionTypes.REMOVE_SELECTED_ITEMS,
  }),

  removeAllItems: () => ({
    type: ShopActionTypes.REMOVE_ALL_ITEMS,
  }),

  changeMenuVisible: (data: boolean) => ({
    type: ShopActionTypes.CHANGE_MENU_VISIBLE,
    payload: { data },
  }),
};

export default actions;
