export const calcTotalPrice = (data) => {
  const res = data.reduce((acc, item) => {
    return acc + item.count * item.price;
  }, 0);

  return Math.round(res * 100) / 100;
};
