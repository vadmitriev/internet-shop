import { nanoid } from "nanoid";

const transformData = (initData) => {
  return initData.map((item) => {
    return {
      id: nanoid(),
      name: item.name,
      price: item.price,
      img: `${process.env.REACT_APP_HOST_URL}${item.image}`,
    };
  });
};

export default transformData;
