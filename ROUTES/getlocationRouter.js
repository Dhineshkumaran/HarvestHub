const express = require('express');
const getlocationController = require('../CONTROLLER/getlocationControllers');
const router = express.Router();
router.route('/')
    .get(getlocationController.getCity);
module.exports = router;