const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
  
dotenv.config();

const app = express();
app.use(express.json());

// token generation
app.post("/login", (req, res) => {
  
    let jwtSigningKey = process.env.JWT_SIGNING_KEY;
    /* schema of user ->
    {
    userID : "",
    secretKey: ""
    }
    */
    
    let data = {
        userID: req.body.userID,
        secretKey: req.body.secretKey
    }

    const token = jwt.sign(data, jwtSigningKey);  
    res.send(token);
});
  
// token validation 
app.get("/validateToken", (req, res) => {
  
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = req.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            return res.send("Successfully Verified");
        }else{
            return res.status(401).send(error);
        }
    } catch (error) {
        return res.status(401).send(error);
    }
});

module.exports = app;