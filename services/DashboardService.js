/**
 * @auth Amjesh
 * @date 06 November 2019
 */

const db = require("../database/db");
const Logger = require('../utils/logger');

const logger = new Logger();

class DashboardService {
    constructor(){
        logger.log("Dashboard class called ");
    }
    
    /**
     * Get dashboard data
     * @param userId: integer
     * @param page: integer
     * @param limit: integer
     */
    async getDashboardData(userId, page, limit){
        logger.log("getDashboardData function called ");
        let offset = (page * limit);
        let result = await db.query(`
            select 
                prelogin.id as id, 
                prelogin.name as name, 
                prelogin.email as email, 
                prelogin.messages as message, 
                prelogin.origin as source, 
                prelogin.created_at as created_at,
                "prelogin" as type
            from ns_prelogin as prelogin
            union(
                select 
                user.userId as id, 
                concat(user.firstName, lastName) as name, 
                user.username as email, 
                "" as message, 
                "signup" as source, 
                user.createdOn as created_at, 
                "signup" as type
            from ns_users as user
            )
            order by created_at desc limit ${offset}, ${limit};, 
            {type: db.QueryTypes.SELECT} 
        `);
        if(result.length > 0){
            logger.log("get dashboard data successfully");
            return result;
        }
        return false;
    }


}

module.exports = DashboardService;