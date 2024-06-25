const express = require('express');
const farmerDashboardController = require('../CONTROLLER/farmerDashboardController');
const router = express.Router();
router.route('/')
    .get(farmerDashboardController.getfarmerDashboard);
module.exports = router;