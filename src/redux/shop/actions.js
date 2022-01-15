const actions = {
  LOAD_DEALERS_ID: "LOAD_DEALERS_ID",
  LOAD_DEALERS_ID_SUCCESS: "LOAD_DEALERS_ID_SUCCESS",
  LOAD_DEALERS_ID_ERROR: "LOAD_DEALERS_ID_ERROR",
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
  LOAD_PRODUCTS_SUCCESS: "LOAD_PRODUCTS_SUCCESS",
  LOAD_PRODUCTS_ERROR: "LOAD_PRODUCTS_ERROR",

  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  REMOVE_ALL_ITEMS: "REMOVE_ALL_ITEMS",

  CHANGE_MENU_VISIBLE: "CHANGE_MENU_VISIBLE",

  loadDealersId: () => ({
    type: actions.LOAD_DEALERS_ID,
  }),

  loadDealersIdSuccess: (data, totalItems) => ({
    type: actions.LOAD_DEALERS_ID_SUCCESS,
    payload: { data, totalItems },
  }),

  loadDealersIdError: (error) => ({
    type: actions.LOAD_DEALERS_ID_ERROR,
    payload: { error },
  }),

  loadProducts: (data) => ({
    type: actions.LOAD_PRODUCTS,
    payload: { data },
  }),

  loadProductsSuccess: (data, totalItems) => ({
    type: actions.LOAD_PRODUCTS_SUCCESS,
    payload: { data, totalItems },
  }),

  loadProductsError: (error) => ({
    type: actions.LOAD_PRODUCTS_ERROR,
    payload: { error },
  }),

  addItem: (data) => ({
    type: actions.ADD_ITEM,
    payload: { data },
  }),

  removeItem: (data) => ({
    type: actions.REMOVE_ITEM,
    payload: { data },
  }),

  removeAllItems: () => ({
    type: actions.REMOVE_ALL_ITEMS,
  }),

  changeMenuVisible: (data) => ({
    type: actions.CHANGE_MENU_VISIBLE,
    payload: { data },
  }),
};

export default actions;
