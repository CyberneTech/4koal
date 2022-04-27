var express = require('express');
var app = express();
var PORT = 2000;

app.get('/', function(req, res) {
    res.status(200).send('Hello from SERVER 1!!');
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:', PORT);
});
