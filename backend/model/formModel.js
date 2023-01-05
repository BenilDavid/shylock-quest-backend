const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
    {
        twitter: {
            type: mongoose.Schema.Types.Mixed,
            required: true
        },
        metamaskId: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true,
        },
        alias: {
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