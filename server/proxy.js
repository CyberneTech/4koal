 require('dotenv').config();

// const acl = require('./ACL');
 const auth = require('./auth');
 const express = require('express');
const jwt = require('jsonwebtoken');
// const httpProxy = require('http-proxy');

 const app = express();
 app.use(express.json())


// app.all('/',acl.authorize, (req, res) => {
//     // configuring acl 
//     acl.config({
//         path: '../test/rules.json',
//         roleObjectKey: req.role,
//         defaultRole: 'guest'
//     });
// });
app.post('/login',(req,res)=>{
    const token = auth.generateToken(req);
    res.send(token);
});

app.get('/test',(req,res)=>{
    const response = auth.validateToken(req,res);
    console.log(response);
    res.send(response);
});

app.listen(6000);


