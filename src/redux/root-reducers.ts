import { combineReducers } from "redux";
import Shop from "./shop/reducers";
import { ShopState } from "types/Shop";

export interface RootState {
  Shop: ShopState;
}

export default combineReducers({
  Shop,
});
