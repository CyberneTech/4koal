const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
  
dotenv.config();

const app = express();
app.use(express.json());

/* The middleware function to be used generating Token
* @param req
* @param res
*/
function generateToken(req) {
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
    return token;
}


  
/* The middleware function to be used validating Token
* @param req
* @param res
* @param next
*/
function validateToken(req, res) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    
    let jwtSigningKey = process.env.JWT_SIGNING_KEY;
    try {
        const decoded = jwt.verify(token, jwtSigningKey);
            return decoded;
        }
    //     if(verified){
    //         console.log(verified);
    //         return 1;
    //     }else{
    //         console.log(verified);
    //         return 0;
    //     }
    catch (error) {
        return error;
    }
}

module.exports = {generateToken, validateToken};