const express = require('express');
const homeController = require('../CONTROLLER/gethomeController');
const router = express.Router();
router.route('/')
    .get(homeController.home);
module.exports = router;