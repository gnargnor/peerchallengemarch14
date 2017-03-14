var http = require('http');
var methods = require('./modules/module3');
var balance = "";
var statement = "";

http.createServer(function(request, response){
response.writeHead(200);
balance = methods.randomToUSD();
statement = methods.accountBalance(balance);
response.write(statement);
response.end();
}).listen(3000);

console.log("app.js ready");
