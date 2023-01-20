const mongoose = require("mongoose");

const formSchema = mongoose.Schema(
    {
        twitter: {
            type: Object,
            required: false
        },
        twitterUserName: {
            type: String,
            required: false
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
        chapterOneAnswer: {
            type: String,
            required: false,
        },
        chapterTwoAnswer: {
            type: String,
            required: false,
        },
        chapterThreeAnswer: {
            type: String,
            required: false,
        },
        chapterFourAnswer: {
            type: String,
            required: false,
        },
        chapterFiveAnswer: {
            type: String,
            required: false,
        },
        chapterSixAnswer: {
            type: String,
            required: false,
        },
        chapterSevenAnswer: {
            type: String,
            required: false,
        },
        chapterEightAnswer: {
            type: String,
            required: false,
        },
        chapterNineAnswer: {
            type: String,
            required: false,
        },
        chapterTenAnswer: {
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