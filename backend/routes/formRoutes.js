const express = require('express');
const { createForm } = require('../controller/formController');
const router = express.Router();

router.post("/", createForm);

module.exports = router;