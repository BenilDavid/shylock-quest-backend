const express = require('express');
const { createForm, getAllRecords } = require('../controller/formController');
const router = express.Router();

router.post("/", createForm);
router.get("/getRecords", getAllRecords);

module.exports = router;