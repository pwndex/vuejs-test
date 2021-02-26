const formatedAmount = (number) => {
  return number.toLocaleString().split(',').join(' ');
};

export default {
  formatedAmount,
};
