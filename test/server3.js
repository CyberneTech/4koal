const http = require('http');

const server = http.createServer((req, res) => {
    const options = {
        host: 'localhost',
        port: 3000,
        path: ' /server3',
        methods: req.method,
        headers: req.headers
    };
});