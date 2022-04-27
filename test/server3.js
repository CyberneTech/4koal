var express = require('express');
var app = express();
var PORT = 5000;

app.get('/', function(req, res) {
    res.status(200).send('Hello from SERVER 3!!');
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:', PORT);
});