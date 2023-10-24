const countdown = (num) => {
  if (num < 0) {
    throw new Error("Input must be greater than or equal to 0");
  }

  if (num === 0) {
    return [0];
  } else {
    return [num].concat(countdown(num - 1));
  }
};

module.exports = countdown;
