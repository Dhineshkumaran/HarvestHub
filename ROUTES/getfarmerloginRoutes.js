const express = require('express');
const displayfarmerLoginController = require('../CONTROLLER/getfarmerloginController');
const router = express.Router();
router.route('/')
    .get(displayfarmerLoginController.displayLogin);
module.exports = router;