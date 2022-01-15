import { nanoid } from "nanoid";

export const calcTotalPrice = (data) => {
  const res = data.reduce((acc, item) => {
    return acc + item.count * item.price;
  }, 0);

  return Math.round(res * 100) / 100;
};

export const calcTotalCount = (data) => {
  return data.reduce((acc, item) => acc + item.count, 0);
};

export const transformProducts = (data) => {
  return (
    data &&
    data.map((item) => {
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
