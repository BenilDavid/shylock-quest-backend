const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
    {
      twitter: {  
        type: String,
        required: [true, "please add a task"]
    },
    answer: {
        type: String,
        required: true,
    }
    },
    {
        timestamps: true
    }
);

const Form = mongoose.model("form", formSchema);

module.exports = Form;