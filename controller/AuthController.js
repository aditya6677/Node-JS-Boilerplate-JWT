/**
 * @auth Amjesh
 * @date 06 November 2019
 */

const db = require("../database/db");
const md5 = require('md5');
const jwt = require('../utils/jwtToken');
const Logger = require('../utils/logger');
const ResponseHandler = require("../utils/ResponseHandler");

// Logger class object
const logger = new Logger();
const responseHandler = new ResponseHandler(logger);

class AuthController {
    /**
     * Authorize user
     * @param {username, password} req 
     * @param {status, data, message} res 
     */
    static async userLogin(req,res){
        logger.log("Userlogin function called");
        let username = req.body.username;
        let password = req.body.password;

        if(!username || !password){
            logger.log(`username or password is blank (username: ${username}, password: ${password})`);
            return responseHandler.sendError(res, 401, "Invalid Username/Password" );
        }

        try{
            logger.log(`Call db query`);
            await db.query(`select userId, username, password from ns_users where username = '${username}'`).then(async([results, metadata]) => {
                if(results.length > 0){
                    let pass = md5(password);
                    if(results[0].password === pass){
                        logger.log(`Password matched`);
                        let token = await jwt.generateJwtToken(results[0].userId);
                        return responseHandler.sendSuccess(res, 200, token);
                    }
                    else{
                        logger.log(`Password does not match`);
                        return responseHandler.sendError(res, 401, "Invalid Username/Password" );
                    }
                } else {
                    logger.log(`Login Data not found in db`,"error");
                    return responseHandler.sendError(res, 401, "Invalid Username/Password" );
                }
            })
        }
        catch(err){
            logger.log(`Database Error: ${err}`,"error");
            return responseHandler.catchError(res, err);
        }
    }
}

module.exports = AuthController;