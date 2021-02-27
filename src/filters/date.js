const formatedDate = (date) => {
  return new Intl.DateTimeFormat('ru').format(new Date(date));
};

export default {
  formatedDate,
};
