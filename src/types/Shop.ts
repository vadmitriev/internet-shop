export type GoodFromAPIProps = {
  name: string;
  price: number;
  image: string;
};

export type DealersProps = {
  ids: string[] | null;
};

export type ProductItemProps = {
  id: string;
  name: string;
  price: number;
  count: number;
  img: string;
  selected: boolean;
};

export type ShopAction = {
  type: string;
  payload: any;
};

export interface ShopState {
  isLoading: boolean;
  isMenuVisible: boolean;
  error: null | boolean | string | Error;
  dealers: DealersProps[];
  products: ProductItemProps[];
}
