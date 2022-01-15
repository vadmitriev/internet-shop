export const calcTotalPrice = (data) => {
  const res = data.reduce((acc, item) => {
    return acc + item.count * item.price;
  }, 0);

  return Math.round(res * 100) / 100;
};

export const calcTotalCount = (data) => {
  return data.reduce((acc, item) => acc + item.count, 0);
};
