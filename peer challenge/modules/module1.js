var randomNumber = 0;

function getRandom(min, max){
  randomNumber = Math.random() * (max - min) + min;
  return randomNumber;
}

module.exports = getRandom;
