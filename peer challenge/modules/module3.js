var getRandom = require('./module1.js');
var toUSD = require('./module2.js');
var balance = "";
var statement = "";

function randomToUSD() {
  balance = toUSD(getRandom(100, 1000000));
  return balance;
              }

function accountBalance(bal){
  statement = "Account Balance: " + bal;
  return statement;
}



console.log(accountBalance(randomToUSD()));
module.exports = {
  randomToUSD,
  accountBalance
};
