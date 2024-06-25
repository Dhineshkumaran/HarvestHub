const express = require('express');
const getprofileController = require('../CONTROLLER/getprofileController');
const router = express.Router();
router.route('/')
    .get(getprofileController.getProfile);
module.exports = router;