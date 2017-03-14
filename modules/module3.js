var getRandom = require('./module1.js');
var toUSD = require('./module2.js');
var balance = "";

function randomToUSD() {
balance = toUSD(getRandom(100, 1000000));
return balance;
}

console.log(randomToUSD());
module.exports = randomToUSD;
