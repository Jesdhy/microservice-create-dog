const express = require('express');
const app = express();
const port = 4547;
const connectDB = require('./config/dbConfig');
const createDogRoutes = require('./routes/createDogRoutes');
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

connectDB();

app.use('/api/dogs', createDogRoutes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});