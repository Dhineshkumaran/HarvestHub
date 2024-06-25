const express = require('express');
const updatefarmerController = require('../CONTROLLER/sendfarmerController');
const router = express.Router();
router.route('/')
    .post(updatefarmerController.storefarmerplantation);
module.exports = router;