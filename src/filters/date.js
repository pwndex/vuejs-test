const formatedDate = (date) => {
  return date.split('-').reverse().join('.');
};

export default {
  formatedDate,
};
