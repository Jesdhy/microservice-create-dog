const express = require('express');
const app = express();
const port = 4545;
const bodyParser = require('body-parser');
const connectDB = require('./config/dbConfig');
const createDogRoutes = require('./routes/createDogRoutes');

app.use('/', createDogRoutes);

app.use(express.json());

connectDB();

app.use('/api/CreateDog', createDogRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});