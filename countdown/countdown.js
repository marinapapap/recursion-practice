const countdown = (startingValue) => {
  let countdown = [];
  for (let i = startingValue; i >= 0; i--) {
    countdown.push(i);
  }
  return countdown;
};

module.exports = countdown;
