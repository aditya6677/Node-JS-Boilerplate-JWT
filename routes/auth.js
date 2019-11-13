const router = require('express').Router();
const AuthController = require('../controller/AuthController');

router.post('/login', AuthController.userLogin);

module.exports = router;