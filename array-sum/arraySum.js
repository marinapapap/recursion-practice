const arraySum = (array) => {
  if (array.length === 1) {
    return array[0];
  } else {
    return array[0] + array[1];
  }
};

module.exports = arraySum;
