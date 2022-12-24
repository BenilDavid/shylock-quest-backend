const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const connectDB = async () => {
try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    // console.log(`mongoDB connected: ${connect.connection.host}`);
    console.log("mongodb connected");
} catch (error) {
    console.log('error', error);
    process.exit(1);
}
}

module.exports = connectDB;