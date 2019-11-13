/**
 * @auth Amjesh
 * @date 06 November 2019
 */

const db = require("../database/db");
const Logger = require('../utils/logger');

class UserSerive {
    constructor(logger){
        this.logger = logger;
        logger.log("Dashboard class called ");
    }
    
    /**
     * Find user by id
     * @param userId
     */
    async getUserById(userId) {
        this.logger.log("getUserById function called ");
        userId = 12641;
        let [result] = await db.query(`
            select * from ns_users where userId = ${userId}; ,
            {type: db.QueryTypes.SELECT}
        `);
        console.log(result.length);
        if(result.length > 0){
            this.logger.log("User data get successfully");
            return result;
        }
        return false;
    }


}

module.exports = UserSerive;