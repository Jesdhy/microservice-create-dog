const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@clusterdog.u4ndr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`;
        mongoose.connect(mongoDB);
        const db = mongoose.connection;

        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', () => {
            console.log('MongoDB connected successfully!');
        });

    } catch (err) {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    }
};

module.exports = connectDB;
