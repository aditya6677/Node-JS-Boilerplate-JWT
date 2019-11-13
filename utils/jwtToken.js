const jwt = require('jsonwebtoken');
const config = require('../config/config')();

/**
 * Encript jwt token (Generate jwt token)
 * @param data{id:UserId}
 * @return token
 */
const generateJwtToken = async(data)=>{
    return jwt.sign({id: data} , config.JWT_SECRET, {expiresIn: '24h'});
}

/**
 * Decript jwt token (Get jwt token)
 * @param token
 * @return userId
 */
const getJwtToken = async(token)=>{
    return jwt.verify(token, config.JWT_SECRET);
}

module.exports = {
    generateJwtToken,
    getJwtToken
}