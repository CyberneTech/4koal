const http = require('http');

const server = http.createServer((req, res) => {
    const options = {
        host: 'localhost',
        port: 3000,
        path: ' /server1',
        methods: req.method,
        headers: req.headers
    };
});

const makeRequest = (options,req,res) => {
    const request = http.request(options, (response) => {
        req.writeHead(response.statusCode, response.headers);
        response.pipe(res,{end:true});
    });
    request.on('error', (e) => {
        console.error(e);
    });
    request.end();
};
