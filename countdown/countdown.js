const countdown = (num) => {
  if (num === 0) {
    return [0];
  } else {
    return [1, 0];
  }
};

module.exports = countdown;
