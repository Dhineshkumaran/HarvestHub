const express = require('express');
const getDoctorController = require('../CONTROLLER/getDoctorController');
const router = express.Router();
router.route('/')
    .get(getDoctorController.getDoctor);
module.exports = router;