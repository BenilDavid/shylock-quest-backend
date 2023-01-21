const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
    {
        twitter: {
            type: Object,
            required: false
        },
        twitterUserName: {
            type: String,
            required: true
        },
        currentChapterCount: {
            type: Number,
            required: false
        },
        metamaskId: {
            type: String,
            required: true
        },
        walletAmount: {
            type: String,
            required: true
        },
        answerOne: {
            type: String,
            required: false,
        },
        answerTwo: {
            type: String,
            required: false,
        },
        answerThree: {
            type: String,
            required: false,
        },
        answerFour: {
            type: String,
            required: false,
        },
        answerFive: {
            type: String,
            required: false,
        },
        answerSix: {
            type: String,
            required: false,
        },
        answerSeven: {
            type: String,
            required: false,
        },
        answerEight: {
            type: String,
            required: false,
        },
        answerNine: {
            type: String,
            required: false,
        },
        answerTen: {
            type: String,
            required: false,
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