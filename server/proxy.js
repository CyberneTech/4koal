
var http = require('http'),
net = require('net'),
httpProxy = require("http-proxy");
url = require('url'),
util = require('util');

httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(4000);

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
});
console.log("listening on port 5050");
server.listen(9000);

