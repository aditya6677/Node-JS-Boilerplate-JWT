const Sequelize = require('sequelize');
const config = require('../config/config')();
const Logger = require('../utils/logger');

const logger = new Logger();
/**
 * Connect database with uri 
 */
const db = new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD, {
    host: config.HOST,
    dialect: config.DB_DIALECT,
  });

/**
 * Test Sequelizer db connection
 */
db.authenticate()
.then(() => {
    logger.log("Connection has been established successfully.");
    console.log('Connection has been established successfully.');
})
.catch(err => {
    logger.log("Unable to connect to the database:", err);
    console.error('Unable to connect to the database:', err);
});

module.exports = db;