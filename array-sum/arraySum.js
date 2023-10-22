const arraySum = (array, index = 0) => {
  if (index >= array.length) {
    return 0;
  }
  return array[index] + arraySum(array, index + 1);
};

module.exports = arraySum;
