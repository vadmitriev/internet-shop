import { nanoid } from "nanoid";
import { GoodFromAPIProps, ProductItemProps } from "types/Shop";

export const calcTotalPrice = (data: ProductItemProps[]) => {
  const res = data.reduce((acc, item) => {
    return acc + item.count * item.price;
  }, 0);

  return Math.round(res * 100) / 100;
};

export const calcTotalCount = (data: ProductItemProps[]) => {
  return data.reduce((acc, item) => acc + item.count, 0);
};

export const transformProducts = (data: any[]): ProductItemProps[] => {
  return (
    data &&
    data.map((item: GoodFromAPIProps) => {
      return {
        id: nanoid(),
        name: item.name,
        price: item.price,
        count: 0,
        img: `${URL}${item.image}`,
        selected: false,
      };
    })
  );
};
