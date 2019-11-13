const app = require('express')();
const config = require('./config/config')();
const port = config.PORT;
const db = require('./database/db');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const swaggerDocument = require('./utils/swagger.json');
const Logger = require("./utils/logger");

//Logger class object
const logger = new Logger();

//Routes
let user = require('./routes/user');
let authenticate = require('./auth/authenticate.js');
let auth = require('./routes/auth');
let dashboard = require('./routes/dashboard');

//Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Auth Middleware
app.use('/api/v1', authenticate);
app.use('/auth', auth);

//Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Middlewares
app.use('/api/v1/user', user);
app.use('/api/v1/dashboard', dashboard);

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
    logger.log(`Server is listening on port ${port}`);
});