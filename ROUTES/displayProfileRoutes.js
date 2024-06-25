const express = require('express');
const getProducts = require('../CONTROLLER/displayProfileController');
const router = express.Router();
router.route('/')
    .get(getProducts.getProfile);
module.exports = router;