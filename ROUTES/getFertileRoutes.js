const express = require('express');
const getFertileController = require('../CONTROLLER/getFertileController');
const router = express.Router();
router.route('/')
    .get(getFertileController.getFertile);
module.exports = router;