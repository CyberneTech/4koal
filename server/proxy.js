 require('dotenv').config();

 const acl = require('./ACL');
 const auth = require('./auth');
 const express = require('express');
 const httpProxy = require('http-proxy');

 const app = express();
 app.use(express.json())


app.post('/login',(req,res)=>{
    const token = auth.generateToken(req);
    res.send(token);
});

app.all('/server1',acl.authorize, (req,res)=>{
    const role = auth.validateToken(req,res);
        // configuring acl 
        acl.config({
            path: '../test/rules.json',
            roleObjectKey: role,
            defaultRole: 'guest'
        });
});

app.listen(6000);


