const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 4547;
const connectDB = require('C:/Users/Jessy/Desktop/microservice-create-dog/service/config/dbConfig'); 
const createDogRoutes = require('C:/Users/Jessy/Desktop/microservice-create-dog/service/routes/createDogRoutes');
const path = require('path');

app.use(cors());  

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

connectDB();

app.use('/api/dogs', createDogRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
