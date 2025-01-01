require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const app = express();
const path = require('path');
const port = 4547;
const connectDB = require('./config/dbConfig');
const createDogRoutes = require('./routes/createDogRoutes');

app.use(cors());  

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

connectDB();

app.use('/api/dogs', createDogRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
