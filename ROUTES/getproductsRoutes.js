const express = require('express');
const getProducts = require('../CONTROLLER/getproductsController');
const router = express.Router();
router.route('/')
    .get(getProducts.getproducts);
module.exports = router;