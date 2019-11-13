/**
 * @author Amjesh
 * @date 06 Nov 2019
 */
const UserService = require('../services/UserSerive');
const Logger = require('../utils/logger');
const ResponseHandler = require('../utils/ResponseHandler');

const logger = new Logger();
const responseHandler = new ResponseHandler(logger);
const userService = new UserService(logger);

class UserController {
    /**
     * User profile get
     * @param
     * @param
     */
    static async profile(req, res){
        logger.log("index function called");
        let userId = req.userId;
        if(!userId){
            logger.log("Profile function call");
            return responseHandler.sendError(res, 401, "Unauthorize Access" );
        }
        try{
            let data = await userService.getUserById(userId);
            if(data){
                logger.log("Profile record get successfully");
                return responseHandler.sendSuccess(res, 200, data[0]);
            } else {
                logger.log("Profile record not found");
                return responseHandler.sendError(res, 404, "Record not found");
            }
        }
        catch(err){
            logger.log(`Profile record found query error: ${err}`,"error");
            return responseHandler.sendError(res, 500, "Somthing went wrong! Please try agen.");
        }

    }
}

module.exports = UserController;
