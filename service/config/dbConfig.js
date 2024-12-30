const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoDB = process.env.MONGO_URI;
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
