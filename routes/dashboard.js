const router = require('express').Router();
const DashboardController = require('../controller/DashboardController');

router.get('/index', DashboardController.index);

module.exports = router;