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
            return assignRole(decoded.secretKey);
        }
    catch (error) {
        return error;
    }
}

 // secret keys for each role
 const secret_keys = new Map();
 secret_keys.set('guest', process.env.GUEST); 
 secret_keys.set('admin', process.env.ADMIN); 
 secret_keys.set('test_user', process.env.TEST_USER);


/**
 * The middleware function to be used for role extraction
 * @param key
 */
 function assignRole(secretKey) {
    var flag=0;
    secret_keys.forEach(function(role, key) {
        if (secretKey==key) return role
    });
}

module.exports = {generateToken, validateToken};