const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoDB = 'mongodb+srv://jdpincha:w85KnSh3CDvNsRb9@clusterdog.u4ndr.mongodb.net/Dog-create?retryWrites=true&w=majority&appName=ClusterDog';
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
