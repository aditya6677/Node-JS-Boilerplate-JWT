const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

router.get('/profile', UserController.profile)

module.exports = router;