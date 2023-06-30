const express = require('express');
router = express.Router();
const { body } = require("express-validator");
const { registerDrone, addMedication, getMedications, checkingIdleDrones, checkBattery} = require("../controllers/index");


// route for authentication
router.post('/register', body("model", "Model is required").trim(),
    body("number", "number must be alphanumeric")
    .trim()
    .isLength({ mzx: 100 })
    .isAlphanumeric(),
    registerDrone);

router.post('/loadmedication/:droneId',  addMedication);
router.get('/checkmedication/:droneId', getMedications);
router.get('/checkidledrones', checkingIdleDrones);
router.get('/checkbattery/:droneId', checkBattery);
module.exports = router;