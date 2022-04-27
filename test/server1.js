// const http = require('http');

// const server = http.createServer((req, res) => {
//     const options = {
//         host: 'localhost',
//         port: 4000,
//         path: ' /server1',
//         methods: req.method,
//         headers: req.headers
//     };
// });

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(4000);