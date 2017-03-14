var usd = "";

function toUSD(randomNumber) {
  usd = "$" + (randomNumber).toFixed(2);
  return usd;
}

module.exports = toUSD;
