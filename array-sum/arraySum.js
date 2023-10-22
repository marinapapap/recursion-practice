const arraySum = (array, index = 0) => {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    count += array[i];
  }
  return count;
};

module.exports = arraySum;
