const jwt = require('../utils/jwtToken');
const DashboardService = require('../services/DashboardService');
const Logger = require('../utils/logger');
const ResponseHandler = require("../utils/ResponseHandler");

const logger = new Logger();
const responseHandler = new ResponseHandler(logger);
const dashboardService = new DashboardService();

class DashboardController {
    /**
     * Get dashboard data
     * @param 
     * @return
     */
    static async index(req, res){
        logger.log("index function called");
        let userId = req.userId;
        let page = req.page || 0;
        let limit = req.limit || 10;
        if(!userId){
            logger.log("in index function token invalid");
            return responseHandler.sendError(res, 401, "Unauthorize Access" );
        }

        try{
            let data = await dashboardService.getDashboardData(userId, page, limit);
            if(data){
                logger.log("Dashboard record get successfully");
                return responseHandler.sendSuccess(res, 200, data);
            } else {
                logger.log("Dashboard record not found");
                return responseHandler.sendError(res, 404, "Record not found");
            }
        }
        catch(err){
            logger.log(`Dashboard record found query error: ${err}`,"error");
            return responseHandler.sendError(res, 500, "Somthing went wrong! Please try agen.");
        }
    }
}

module.exports = DashboardController;