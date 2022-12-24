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

  module.exports = { createForm };