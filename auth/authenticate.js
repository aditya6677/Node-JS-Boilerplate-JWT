/**
 * @auth Amjesh
 * @date 06 November 2019
 */

let jwt = require('jsonwebtoken');
const config = require('../config/config')();

module.exports = async (req,res,next) => {
    let token = req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({
            status : false,
            message : 'Unauthorized'
        });
    }
    jwt.verify(token, config.JWT_SECRET,(err, decoded)=>{
        if(err){
            return res.status(401).json({
                status : false,
                message : 'Unauthorized && Invalid Token'
            });
        }else{
            req.userId = decoded.id;
            next();
        }
    });
}