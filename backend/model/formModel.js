const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
    {
      metamaskId: {  
        type: String,
        required: true
    }, 
     twitter: {  
        type: Object,
        required: true
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