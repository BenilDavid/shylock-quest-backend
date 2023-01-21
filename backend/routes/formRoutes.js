const express = require('express');
const { createForm, getAllRecords, updateForm } = require('../controller/formController');
const router = express.Router();

router.post("/", createForm);
router.get("/getRecords", getAllRecords);
router.patch("/updateRecord", updateForm);

module.exports = router;