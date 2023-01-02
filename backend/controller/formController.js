const Form = require('../model/formModel');

// add twitter and answer
const createForm = async (req, res) => {
    try {
      const form = await Form.create(req.body);
      res.status(200).json(form);
    } catch (error) {
      res.status(500).json({msg: error.message});
    }
  }

// get all records
const getAllRecords = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
} catch (error) {
    res.status(500).json({msg: error.message})
}
  }

  module.exports = { createForm, getAllRecords };