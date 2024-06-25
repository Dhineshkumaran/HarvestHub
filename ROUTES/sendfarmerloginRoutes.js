const express = require('express');
const farmerLoginController = require('../CONTROLLER/sendfarmerloginController');
const router = express.Router();
router.route('/')
    .post(farmerLoginController.farmer_login);
module.exports = router;