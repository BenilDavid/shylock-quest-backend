
const dotenv = require('dotenv').config();
const connectDB = require('./config/connectDB');
// const { json } = require('express');
const formRoutes = require('./routes/formRoutes');
const cors = require('cors');

const Form = require('./model/formModel');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: ["http://localhost:3000", "https://shylock-quest-development.onrender.com", "https://shylock-quest-development.netlify.app", "https://shylocknft.com", "https://10-chapter-quest.netlify.app", "https://testing-quest-chapter.netlify.app"]
}));
app.use("/api/submit-form", formRoutes);
// routes
app.get("/", async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
})

const startServer = async () => {
    try {
        await connectDB();
        // server
        app.listen(PORT, () => {
            console.log(`listening on port : ${PORT} `);
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();