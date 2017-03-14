var http = require('http');
var randomToUSD = require('./modules/module3');
var balance = "";

http.createServer(function(request, response){
response.writeHead(200);
balance = randomToUSD();
response.write("Account Balance: " + balance);
response.end();
}).listen(8000);

console.log("app.js ready");
